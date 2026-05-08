export {} // Mark the file as a module, do not remove unless there are other import/exports!
declare global {
/**
 * @deprecated please use `java()` directly, ProbeJS adds TS path support for it.
 * @see java
 */
function require(name: string): any
}
