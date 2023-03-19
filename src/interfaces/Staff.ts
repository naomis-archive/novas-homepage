import { Social } from "./Social";

export interface Staff {
  name: string;
  roles: (
    | "moderator"
    | "support"
    | "developer"
    | "artist"
    | "translator"
    | "admin"
  )[];
  avatarUrl: string;
  bio: string;
  socials: Social[];
}
