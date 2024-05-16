/**
 * Checks if a value or object is non null.
 *
 * @export
 */
export declare function isNonNull<T>(value: T | undefined | null): value is NonNullable<T>;
export declare function isDefined<T>(value: T | undefined | null): value is NonNullable<T>;
