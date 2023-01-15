import { AnyAddress, PostalAddress } from "@/shared"

export interface AddressFieldProps {
  label?: string
  address?: PostalAddress
  isError?: boolean
  isFieldset?: boolean
  placeholder?: string
  onAddressChange: (address?: PostalAddress) => void
}

export interface AddressOutputItemProps {
  iconName: string
  label: string
  value: string
  isError?: boolean
}

export interface LocationFieldState {
  isEditing: boolean
  stateField: string
  locationField: string
  addressList: AnyAddress[]
}