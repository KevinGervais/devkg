import { AllCollections, AllRequests, RequestData } from "shared"

import { ServerState, SocketState } from "@/model"

import { SocketRequestHandler } from "."

export type SocketParams<Collection extends AllCollections, Path extends keyof AllRequests[Collection]> = {
  body: AllRequests[Collection][Path] extends RequestData<any, any, any> ? AllRequests[Collection][Path]["params"] : never,
  send: (
    data: AllRequests[Collection][Path] extends RequestData<any, any, any> ? AllRequests[Collection][Path]["result"] : never,
    isDecrypted?: boolean
  ) => void,
  emitGeneric: <
    EmitCollection extends AllCollections,
    EmitPath extends keyof AllRequests[EmitCollection]
  >(
    collection: EmitCollection,
    path: EmitPath,
    id: string | undefined,
    data: AllRequests[EmitCollection][EmitPath] extends RequestData<any, any, any> ? AllRequests[EmitCollection][EmitPath]["emit"] : never,

  ) => void,
  emit: (
    id: string | undefined,
    data: AllRequests[Collection][Path] extends RequestData<any, any, any> ? AllRequests[Collection][Path]["emit"] : never
  ) => void,
} & SocketState & ServerState & Pick<SocketRequestHandler, "createSession" | "deleteSession">

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type ClassMethods<C, M extends keyof C> = UnionToIntersection<{
  [K in M]: C[K] extends ((...args: any[]) => any) ? Parameters<C[K]>[0] : never
}[M]>
export interface PaypalResponses {
  getOneAccessToken: {
    access_token: string
    expires_in: number
  }

  getOneIdentityToken: {
    access_token: string
    expires_in: number
  }
  refundOneOrder: {
    id: string
  }
  createOnePayout: {
    batch_header: {
      payout_batch_id: string,
    }
  }

  authorizeOneOrder: {
    status: "CREATED" | "SAVED" | "APPROVED" | "VOIDED" | "COMPLETED" | "PAYER_ACTION_REQUIRED"
    purchase_units: {
      payments: {
        authorizations: {
          id: string
        }[]
      }
    }[]
  }
  captureOneAuthorization: {
    status: "COMPLETED" | "DECLINED" | "PARTIALLY_REFUNDED" | "PENDING" | "REFUNDED" | "FAILED",
    id: string
  }

  getOneUser: {
    user_id?: string
    name?: string
    given_name?: string
    family_name?: string
    payer_id?: string
    verified_account?: boolean
    emails?: {
      value: string
      primary: boolean
    }[]
  }

  createOneOrder: {
    id: string
  }

  getOneOrder: {
    create_time: string
    update_time: string
    id: string
    payment_source: any
    intent: any
    payer: {
      payer_id: string
      email_address: string
    }
    purchase_units: any[]
    status: "CREATED" | "SAVED" | "APPROVED" | "VOIDED" | "COMPLETED"
    PAYER_ACTION_REQUIRED: any
  }

  getOnePayout: {
    items: {
      payout_item_id: string
      transaction_id: string
      transaction_status: string
      payout_batch_id: string
      payout_item_fee: {
        currency: string,
        value: string
      },
      payout_item: {
        recipient_type: "EMAIL" | "PHONE" | "PAYPAL_ID",
        amount: {
          value: string,
          currency: string
        },
        note?: string
        receiver: string
        sender_item_id: string
      },
      time_processed: string
    }[]
  }
}