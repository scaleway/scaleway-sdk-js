# 🐻sembear

> Some friendly semver range utilities

## Install

```bash
yarn add sembear
```

## Usage

```jsx
import { contains, highest } from "sembear";

// this checks if rangeB is contained within rangeA
// or if every version that matches rangeB will also match rangeA
// (though there could be versions that match rangeA but not rangeB)
contains(rangeA, rangeB);

contains("^1.0.0", "^1.0.0") === true;
contains("^1.0.0", "^1.2.0") === true;

// this will return the range that has the highest lower bound
// if there are multiple ranges with the highest lower bound
// it will return the range with the highest upper bound
// if there are multiple ranges with the highest upper bound, one of ones ranges will be returned
highest([...ranges]);

highest([">=1.0.0 <3.0.0", ">=2.0.0 <3.0.0"]) === ">=2.0.0 <3.0.0";
highest(["^16.3.0", "^16.8.0"]) === "^16.8.0";
highest([">=16.3.0", "^16.8.0"]) === "^16.8.0";
highest([">1", ">2"]) === ">2";
highest(["*", ">2"]) === ">2";
```
