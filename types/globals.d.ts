// This makes the file module.
export {};

export type Roles = "admin" | "moderator";

// See Explanation
declare global {
	interface CustomJwtSessionClaims {
		metadata: {
			role?: Roles;
		};
	}
}
