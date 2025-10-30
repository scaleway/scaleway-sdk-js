import * as semver from 'semver';

// https://github.com/npm/node-semver/issues/166#issuecomment-245990039
function hasUpperBound(range) {
  range = new semver.Range(range);
  if (!range) return false;
  return range.set.every(function (subset) {
    return subset.some(function (comparator) {
      return comparator.operator.match(/^</) || comparator.operator === "" && comparator.value !== "";
    });
  });
}

// https://github.com/npm/node-semver/issues/166#issuecomment-246040973
function upperBound(range) {
  range = new semver.Range(range);
  if (!hasUpperBound(range)) return null;
  return range.set.map(function (subset) {
    return subset.filter(function (comparator) {
      return /^</.test(comparator.operator) || comparator.operator === "" && comparator.value !== "";
    });
  }).map(function (subset) {
    return subset.sort(function (a, b) {
      return semver.compare(a.semver, b.semver);
    })[0];
  }).sort(function (a, b) {
    return semver.rcompare(a.semver, b.semver);
  }).slice(0, 1).map(function (comparator) {
    if (comparator.operator === "") {
      return "<=" + comparator.value;
    }
    return comparator.value;
  })[0];
}

// https://github.com/npm/node-semver/issues/166#issuecomment-245990039
function hasLowerBound(range) {
  range = new semver.Range(range);
  if (!range) return false;
  return range.set.every(function (subset) {
    return subset.some(function (comparator) {
      return comparator.operator.match(/^>/) || comparator.operator === "" && comparator.value !== "";
    });
  });
}

// https://github.com/npm/node-semver/issues/166#issuecomment-246040973
function lowerBound(range) {
  range = new semver.Range(range);
  if (!hasLowerBound(range)) return "0.0.0";
  return range.set.map(function (subset) {
    return subset.filter(function (comparator) {
      return /^>/.test(comparator.operator) || comparator.operator === "" && comparator.value !== "";
    });
  }).map(function (subset) {
    return subset.sort(function (a, b) {
      return semver.compare(a.semver, b.semver);
    })[0];
  }).sort(function (a, b) {
    return semver.compare(a.semver, b.semver);
  }).slice(0, 1).map(function (comparator) {
    if (comparator.operator === "") {
      return ">=" + comparator.value;
    }
    return comparator.value;
  })[0];
}

function getBoundsForRange(range) {
  return new semver.Range(range).set.map(function (comparatorSet) {
    var comparatorSetString = comparatorSet.map(function (x) {
      return x.value;
    }).join(" ");
    return {
      upperBound: upperBound(comparatorSetString),
      lowerBound: lowerBound(comparatorSetString)
    };
  });
}
function upperBoundOfRangeAWithinBoundsOfB(devDepRange, peerDepRange) {
  var devDepRangeBounds = getBoundsForRange(devDepRange);
  var peerDepRangeBounds = getBoundsForRange(peerDepRange);
  return peerDepRangeBounds.some(function (peerDepRangeBound) {
    return devDepRangeBounds.some(function (devDepRangeBound) {
      return compareBounds(devDepRangeBound.upperBound, peerDepRangeBound.lowerBound) >= 0 && compareBounds(peerDepRangeBound.upperBound, devDepRangeBound.lowerBound) >= 0;
    });
  });
}

// this function assumes that both operators have > OR < but not both
function compareBounds(boundA, boundB) {
  if (boundA === null && boundB === null) {
    return 0;
  }
  if (boundA === null) {
    return 1;
  }
  if (boundB === null) {
    return -1;
  }
  var compA = new semver.Comparator(boundA);
  var compB = new semver.Comparator(boundB);
  var versionComparison = semver.compare(compA.semver, compB.semver);
  if (versionComparison !== 0) {
    return versionComparison;
  }
  if (compA.operator === compB.operator) {
    return 0;
  }
  return /=/.test(compA.operator) ? 1 : -1;
}

// this checks if rangeB is contained within rangeA
function contains(rawRangeA, rawRangeB) {
  var rangeABounds = getBoundsForRange(rawRangeA);
  var rangeBBounds = getBoundsForRange(rawRangeB);
  return rangeBBounds.every(function (bBounds) {
    return rangeABounds.some(function (aBounds) {
      var isInUpperBound = compareBounds(aBounds.upperBound, bBounds.upperBound) >= 0;
      var isInLowerBound = compareBounds(aBounds.lowerBound, bBounds.lowerBound) <= 0;
      return isInUpperBound && isInLowerBound;
    });
  });
}
function highest(rawRanges) {
  var rangesWithBounds = rawRanges.map(function (rawRange) {
    return {
      range: rawRange,
      upperBound: upperBound(rawRange),
      lowerBound: lowerBound(rawRange)
    };
  });
  rangesWithBounds.sort(function (a, b) {
    var compA = new semver.Comparator(a.lowerBound);
    var compB = new semver.Comparator(b.lowerBound);
    if (semver.eq(compA.semver, compB.semver)) {
      if (compA.operator === compB.operator) {
        return 0;
      }
      return /=/.test(compA.operator) ? 1 : -1;
    }
    return semver.compare(compA.semver, compB.semver);
  });
  var highestLowerBound = rangesWithBounds[rangesWithBounds.length - 1].lowerBound;
  var rangesWithHighestLowerBound = rangesWithBounds.filter(function (x) {
    return x.lowerBound === highestLowerBound;
  });
  if (rangesWithHighestLowerBound.length === 1) {
    return rangesWithHighestLowerBound[0].range;
  }
  rangesWithHighestLowerBound.sort(function (a, b) {
    if (a.upperBound === null && b.upperBound === null) {
      return 0;
    }
    if (a.upperBound === null) {
      return 1;
    }
    if (b.upperBound === null) {
      return -1;
    }
    var compA = new semver.Comparator(a.upperBound);
    var compB = new semver.Comparator(b.upperBound);
    if (semver.eq(compA.semver, compB.semver)) {
      if (compA.operator === compB.operator) {
        return 0;
      }
      return /=/.test(compA.operator) ? 1 : -1;
    }
    return semver.compare(compA.semver, compB.semver);
  });
  var highestUpperBound = rangesWithHighestLowerBound[rangesWithHighestLowerBound.length - 1].upperBound;
  var rangesWithHighestUpperBound = rangesWithHighestLowerBound.filter(function (x) {
    return x.upperBound === highestUpperBound;
  });
  return rangesWithHighestUpperBound.map(function (x) {
    return x.range;
  }).sort()[0];
}

export { compareBounds, contains, highest, upperBoundOfRangeAWithinBoundsOfB };
