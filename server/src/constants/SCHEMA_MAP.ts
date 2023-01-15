
import { AllCollections } from "shared"

import { SchemaItem } from "@/model"
import { addressSchema } from "@/requests/addresses"
import { bugSchema } from "@/requests/bugs"
import { emailSchema } from "@/requests/emails"
import { fileSchema } from "@/requests/files"
import { sessionSchema } from "@/requests/sessions"
import { userSchema } from "@/requests/users"

export const SCHEMA_MAP: { [key in AllCollections]: SchemaItem<key> } = {
  sockets: {} as any,
  addresses: addressSchema,
  emails: emailSchema,
  files: fileSchema,
  sessions: sessionSchema,
  users: userSchema,
  bugs: bugSchema
}