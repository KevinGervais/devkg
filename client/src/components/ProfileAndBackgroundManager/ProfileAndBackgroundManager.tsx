import { onFileDrop, uploadFile } from "@/functions"
import { useReduxState } from "@/redux"

import { Icon } from ".."
import { ProfileAndBackgroundManagerStyled } from "./ProfileAndBackgroundManagerStyled"
import { ProfileAndBackgroundManagerProps } from "./model"

export function ProfileAndBackgroundManager({
  backgroundImage,
  profileImage,
  onBackgroundChange,
  onProfileChange
}: ProfileAndBackgroundManagerProps): JSX.Element {
  const say = useReduxState(state => state.languages.say)
  return (
    <ProfileAndBackgroundManagerStyled className="profil-and-background">
      <div
        className="background-image "
        style={{ backgroundImage: `url(${backgroundImage})` }}
        onDrop={evt => onBackgroundChange && onFileDrop(evt, true, file => onBackgroundChange(file))}
      >
        {!backgroundImage && <Icon name="image" />}
        {onBackgroundChange && (
          <div
            className="upload-button shade-bg-white-primary"
            onClick={() => onBackgroundChange && uploadFile("image/*", false, imageList => {
              onBackgroundChange(imageList[0]!)
            })}
          >
            <span>{say.optional}</span>
            {say.uploadImage}
            <Icon name="camera-alt" />
          </div>
        )}
      </div>
      <div
        className="profile-image"
        onClick={() => onProfileChange && uploadFile("image/*", false, imageList => {
          onProfileChange(imageList[0]!)
        })}
        onDrop={evt => onProfileChange && onFileDrop(evt, true, file => onProfileChange(file))}
      >
        <Icon
          name="camera-alt"
          className={`full-absolute ${profileImage ? "hover" : onProfileChange ? "shade-bg-white-primary" : "read-only"}`}
        />
        {profileImage && <img className="full-absolute" src={profileImage} alt="profile" />}
      </div>
    </ProfileAndBackgroundManagerStyled>
  )
}