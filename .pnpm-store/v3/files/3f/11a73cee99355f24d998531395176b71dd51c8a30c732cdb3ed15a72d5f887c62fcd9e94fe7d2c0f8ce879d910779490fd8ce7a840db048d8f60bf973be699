import { PackageManagerCommands } from '../../utils/package-manager';
import { NxJsonConfiguration } from '../../config/nx-json';
export interface InitArgs {
    interactive: boolean;
    nxCloud?: boolean;
    useDotNxInstallation?: boolean;
    integrated?: boolean;
}
export declare function installPlugins(repoRoot: string, plugins: string[], pmc: PackageManagerCommands, updatePackageScripts: boolean): void;
export declare function initHandler(options: InitArgs): Promise<void>;
export declare function detectPlugins(nxJson: NxJsonConfiguration, interactive: boolean, includeAngularCli?: boolean): Promise<{
    plugins: string[];
    updatePackageScripts: boolean;
}>;
