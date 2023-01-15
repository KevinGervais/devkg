import { useState } from "react"
import styled from "styled-components"

import { tw } from "@/shared"

import { Button } from "../Button"
import { Fieldset } from "../Fieldset"
import { Icon } from "../Icon"
import { NotifCircle } from "../NotifCircle"
import { TextArea } from "../TextArea"
import { InputOutputProps } from "./model"
const ParentStyled = styled.div`
  min-height: 40px;
  & > .input {
    height: 32px;
  }
  & > .address-field-opened {
    background-color: white;
    margin: 10px 0;
    border-color: transparent;
  }
  & > .files-picker {
    padding: 12px 0;
    button {
      height: 32px;
    }
  }
`
export function InputOutput({ label,
  value,
  valueList,
  htmlValue,
  children,
  iconName,
  onSave,
  onEditStart,
  className,
  isDisabled,
  buttonList,
  isNotif,
  onNotifClick,
  isEditing: isEditingProp
}: InputOutputProps): JSX.Element {
  const [isEdit, setState] = useState(false)
  const isEditing = isEditingProp !== undefined ? isEditingProp : isEdit
  const content = (
    <>
      {!isEditing && (
        <div className={tw`${className} flex-1 relative min-h-[40px] px-4 rounded-3xl row-middle bg-grey-100 ${isDisabled && "opacity-50"}`}>
          {isNotif && (
            <NotifCircle onNotifClick={onNotifClick} />
          )}
          {iconName && <Icon className="h-5 mr-3 text-secondary-300" name={iconName} />}
          <div className="flex-1 truncate">
            {value ? value : htmlValue ?
              (
                <TextArea
                  className="py-2 in-span:!text-grey-800"
                  value={htmlValue}
                  isDynamicValue={true}
                  isReadonly={true}
                />
              ) : (
                <div className="flex-wrap w-full mt-2 row">
                  {(valueList || []).map((key, index) => (
                    <div key={index} className="px-4 mb-2 mr-2 rounded-full w-max center h-7 bg-primary-100 text-primary-700">
                      {key}
                    </div>
                  ))}
                </div>
              )}
          </div>
          {(children || onEditStart) && isEditingProp === undefined && !isDisabled && (
            <div className="my-1 ml-4 col not-last-children:mb-2 input-output-buttons">
              <Button
                size="sm"
                variant="outlined"
                color="secondary"
                iconName="pencil-alt"
                isCircle={true}
                onClick={() => {
                  if (onEditStart) {
                    onEditStart()
                  }
                  if (children) {
                    setState(true)
                  }
                }}
              />
              {buttonList ? buttonList.map((item, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant="outlined"
                  color={item.color || "secondary"}
                  iconName={item.iconName}
                  isCircle={true}
                  onClick={item.onClick}
                />
              )) : null}
            </div>
          )}
        </div>
      )}
      {isEditing && (
        <div className={tw`${className} flex-1 px-4 rounded-3xl row-middle bg-grey-100`}>
          <ParentStyled className={tw`
          ${isEditingProp === undefined ? "w-[calc(100%-84px)]" : "w-full"}
          row-middle
          children:w-full
          children:mb-0
          in-.textarea:bg-white in-.textarea-content:min-h-[3rem] children-.textarea:my-3 in-.textarea:rounded-xl
          `}>
            {children}
          </ParentStyled>
          {isEditingProp === undefined && (
            <>
              <Button
                className="ml-4"
                size="sm"
                variant="outlined"
                color="success"
                iconName="save"
                isCircle={true}
                onClick={() => {
                  setState(false)
                  if (onSave) {
                    onSave()
                  }
                }}
              />
              <Button
                className="ml-2"
                size="sm"
                variant="outlined"
                color="error"
                iconName="times"
                isCircle={true}
                onClick={() => setState(false)}
              />
            </>
          )}
        </div>
      )}
    </>
  )
  if (label) {
    return (
      <Fieldset label={label}>
        {content}
      </Fieldset>
    )
  } else {
    return content
  }
}