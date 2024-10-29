import { NxReleaseChangelogConfiguration, NxReleaseConfiguration } from '../../config/nx-json';
import { ChangelogOptions } from './command-object';
import { Reference } from './utils/git';
import { ReleaseVersion } from './utils/shared';
export interface NxReleaseChangelogResult {
    workspaceChangelog?: {
        releaseVersion: ReleaseVersion;
        contents: string;
    };
    projectChangelogs?: {
        [projectName: string]: {
            releaseVersion: ReleaseVersion;
            contents: string;
        };
    };
}
export interface ChangelogChange {
    type: string;
    scope: string;
    description: string;
    affectedProjects: string[] | '*';
    body?: string;
    isBreaking?: boolean;
    githubReferences?: Reference[];
    author?: {
        name: string;
        email: string;
    };
    shortHash?: string;
    revertedHashes?: string[];
}
export declare const releaseChangelogCLIHandler: (args: ChangelogOptions) => Promise<number>;
export declare function createAPI(overrideReleaseConfig: NxReleaseConfiguration): (args: ChangelogOptions) => Promise<NxReleaseChangelogResult>;
export declare function shouldCreateGitHubRelease(changelogConfig: NxReleaseChangelogConfiguration | false | undefined, createReleaseArg?: ChangelogOptions['createRelease'] | undefined): boolean;
