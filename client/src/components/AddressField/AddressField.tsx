import { AllCanadianStateCodes, AllUnitedStatesStateCodes, STATE_BY_STATE_CODE, STATE_CODE_LIST_BY_COUNTRY, addressToString, tw } from "@/shared"

import { geocodeAddress } from "@/api/requests"
import { simplifyString } from "@/functions"
import { setReduxState, useReduxState, useStates } from "@/redux"

import { AutoComplete, Button, Fieldset, Input } from ".."
import { AddressOutputItem } from "./AddressOutputItem"
import { AddressFieldProps, LocationFieldState } from "./model"

export function AddressField({
  address,
  onAddressChange,
  isFieldset = true,
  label,
  isError,
  placeholder,
}: AddressFieldProps): JSX.Element {
  const { isMissingField, say } = useReduxState(state => ({
    say: state.languages.say,
    isMissingField: state.ui.snackbar?.message === "missingField",
  }))
  const [{
    addressList,
    stateField,
    isEditing,
    locationField
  }, setState] = useStates<LocationFieldState>({
    stateField: "",
    isEditing: false,
    locationField: "",
    addressList: []
  })
  const autocomplete = (
    <AutoComplete
      mobileFocusLabel={label || say.address}
      inputProps={{
        isError: isMissingField && !locationField,
        value: locationField,
        placeholder: placeholder || say.addressPlaceholder,
        iconName: "map-marker-alt",
        onChange: evt => {
          setState({ locationField: evt.target.value })
          if (evt.target.value) {
            geocodeAddress({ searchField: evt.target.value, isLoadingHidden: true })
              .then(list => setState({ addressList: list }))
          }
        }
      }}
      dropdownProps={{
        selectedValue: undefined,
        optionList: addressList,
        outputMap: item => item.address,
        onChange: item => {
          onAddressChange({
            streetName: "",
            streetNumber: "",
            ...item,
          })
          setState({ locationField: item.address })
        }
      }}
    />
  )

  const gridInputs = address && (
    <div className={tw`
    address-field-opened
    grid
    relative
    items-center
    grid-cols-2
    gap-2.5
    auto-rows-auto
    p-5
    rounded-2xl
    mb-2.5
    border
    border-solid
    not:div
    children:mb-2
    ${isError ? "border-error-300" : "border-grey-200"}
    ${isEditing && "pb-12"}
    `}>
      {!isEditing && (
        <>
          <AddressOutputItem
            label={say.streetNumber}
            iconName="map-signs"
            isError={!address.streetNumber}
            value={address.streetNumber || say.missingField}
          />
          <AddressOutputItem
            label={say.streetName}
            iconName="road"
            isError={!address.streetName}
            value={address.streetName || say.missingField}
          />
          {address.streetExt && (
            <AddressOutputItem
              label={say.streetExt}
              iconName="building"
              value={address.streetExt}
            />
          )}
          <AddressOutputItem
            label={say.postalCode}
            iconName="mailbox"
            value={address.postalCode}
          />
          <AddressOutputItem
            label={say.city}
            iconName="city"
            value={address.city}
          />
          <AddressOutputItem
            label={say.state}
            iconName="university"
            value={say[
              STATE_BY_STATE_CODE.canada[address.stateCode as keyof typeof STATE_BY_STATE_CODE.canada]
              || STATE_BY_STATE_CODE.unitedStates[address.stateCode as keyof typeof STATE_BY_STATE_CODE.unitedStates]
            ]}
          />
          <AddressOutputItem
            label={say.country}
            iconName="flag"
            value={say[address.countryCode]}
          />
          <div className="absolute flex right-3 bottom-3">
            <Button
              className="mr-3"
              variant="outlined"
              color="secondary"
              iconName="pencil-alt"
              isCircle={true}
              size="sm"
              onClick={() => setState({
                isEditing: true, stateField: say[
                  STATE_BY_STATE_CODE.canada[address.stateCode as AllCanadianStateCodes]
                  || STATE_BY_STATE_CODE.unitedStates[address.stateCode as AllUnitedStatesStateCodes]
                ]
              })}
            />
            <Button
              variant="outlined"
              color="error"
              iconName="trash-alt"
              isCircle={true}
              size="sm"
              onClick={() => {
                onAddressChange()
                setState({
                  addressList: [],
                  locationField: "",
                  stateField: "",
                  isEditing: false
                })
              }}
            />
          </div>
        </>
      )}
      {isEditing && (
        <>
          <Fieldset label={say.streetNumber} isRequired={true}>
            <Input
              isError={isMissingField && !address.streetNumber}
              value={address.streetNumber}
              onChange={evt => onAddressChange({ ...address, streetNumber: evt.target.value })}
              placeholder="1234"
              iconName="map-signs"
            />
          </Fieldset>
          <Fieldset label={say.streetName} isRequired={true}>
            <Input
              isError={isMissingField && !address.streetName}
              onChange={evt => onAddressChange({ ...address, streetName: evt.target.value })}
              placeholder={say.streetNamePlaceholder}
              value={address.streetName}
              iconName="road"
            />
          </Fieldset>
          <Fieldset label={say.streetExt} isOptional={true}>
            <Input
              onChange={evt => onAddressChange({ ...address, streetExt: evt.target.value })}
              placeholder={say.streetExtPlaceholder}
              value={address.streetExt}
              iconName="building"
            />
          </Fieldset>
          <Fieldset label={say.postalCode} isRequired={true}>
            <Input
              isError={isMissingField && !address.postalCode}
              onChange={evt => onAddressChange({ ...address, postalCode: evt.target.value })}
              placeholder={say.postalCodePlaceholder}
              value={address.postalCode}
              iconName="mailbox"
            />
          </Fieldset>
          <Fieldset label={say.city} isRequired={true}>
            <Input
              isError={isMissingField && !address.city}
              onChange={evt => onAddressChange({ ...address, city: evt.target.value })}
              placeholder={say.cityPlaceholder}
              value={address.city}
              iconName="city"
            />
          </Fieldset>
          <Fieldset label={say.state} isRequired={true}>
            <AutoComplete
              filter={(stateCode: typeof STATE_CODE_LIST_BY_COUNTRY.canada[number]) => {
                return simplifyString(STATE_BY_STATE_CODE.canada[stateCode]).includes(simplifyString(stateField))
              }}
              mobileFocusLabel={say.state}
              inputProps={{
                isError: isMissingField && !stateField,
                onChange: evt => setState({ stateField: evt.target.value }),
                placeholder: say.statePlaceholder,
                value: stateField,
                iconName: "university",
              }}
              dropdownProps={{
                selectedValue: STATE_BY_STATE_CODE.canada[address.stateCode as typeof STATE_CODE_LIST_BY_COUNTRY.canada[number]],
                optionList: STATE_CODE_LIST_BY_COUNTRY.canada,
                sort: (
                  stateCode1: typeof STATE_CODE_LIST_BY_COUNTRY.canada[number],
                  stateCode2: typeof STATE_CODE_LIST_BY_COUNTRY.canada[number],
                ) => say[STATE_BY_STATE_CODE.canada[stateCode1]].localeCompare(say[STATE_BY_STATE_CODE.canada[stateCode2]]),
                outputMap: (stateCode: typeof STATE_CODE_LIST_BY_COUNTRY.canada[number]) => say[STATE_BY_STATE_CODE.canada[stateCode]],
                onChange: newStateCode => {
                  const canadaCode = newStateCode as keyof typeof STATE_BY_STATE_CODE.canada
                  onAddressChange({
                    ...address,
                    stateCode: canadaCode,
                    stateOrRegion: STATE_BY_STATE_CODE.canada[canadaCode]
                  })
                  setState({ stateField: say[STATE_BY_STATE_CODE.canada[canadaCode]] })
                }
              }}
            />
          </Fieldset>
          <Fieldset label={say.country} isRequired={true}>
            <Input
              placeholder={say.countryPlaceholder}
              value={say.canada}
              iconName="flag"
            />
          </Fieldset>
          <div className="absolute flex right-3 bottom-3 !mb-0">
            <Button
              variant="outlined"
              className="mr-3"
              color="secondary"
              iconName="save"
              isCircle={true}
              size="sm"
              onClick={() => {
                geocodeAddress({ searchField: addressToString({ ...address, streetExt: undefined }), isLoadingHidden: false })
                  .then(list => {
                    if (list.length) {
                      onAddressChange({
                        streetName: "",
                        streetNumber: "",
                        ...list[0]!,
                        streetExt: address.streetExt ? address.streetExt : undefined
                      })
                      setState({ isEditing: false })
                    } else {
                      setReduxState("ui", { snackbar: { message: "invalidLocation", severity: "error" } })
                    }
                  })
              }}
            />
            <Button
              variant="outlined"
              color="error"
              iconName="trash-alt"
              isCircle={true}
              size="sm"
              onClick={() => {
                onAddressChange()
                setState({
                  locationField: "",
                  addressList: [],
                  stateField: "",
                  isEditing: false
                })
              }}
            />
          </div>
        </>
      )}
    </div>
  )
  return (
    <>
      {!address && isFieldset && (
        <Fieldset label={label ? label : say.address} isRequired={true}>
          {autocomplete}
        </Fieldset>
      )}
      {!address && !isFieldset && autocomplete}

      {address && isFieldset && (
        <Fieldset label={label ? label : say.address} isRequired={true}>
          {gridInputs}
        </Fieldset>
      )}
      {address && !isFieldset && gridInputs}
    </>
  )
}