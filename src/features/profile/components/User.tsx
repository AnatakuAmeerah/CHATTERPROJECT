import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { titleStyles, EditProfileCard, Label } from '../utils/EditProfileCard';
import defaultProfile from '../../../assets/default_profile.webp';
import { FaRegEdit } from 'react-icons/fa';
import CustomMenuItem from '../../../shared/utils/CustomMenuItem';
import { checkUsername } from '../../../helper/checkUsername';

interface UserProps {
  nameRef: React.RefObject<HTMLInputElement>;
  emailRef: React.RefObject<HTMLInputElement>;
  usernameRef: React.RefObject<HTMLInputElement>;
  profileData: any;
  authenticatedUsernames: string[];
  previewImgRef: React.RefObject<HTMLDivElement>;
  removeProfileImgHandler: (url: string) => void;
}

const User: React.FC<UserProps> = ({
  nameRef,
  emailRef,
  usernameRef,
  profileData,
  authenticatedUsernames,
  previewImgRef,
  removeProfileImgHandler,
}) => {
  const [previewImg, setPreviewImg] = useState('');
  const [isValid, setIsValid] = useState('valid');

  const imagePreviewHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];

    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        setPreviewImg(reader.result as string);
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  };

  const clickEdit = () => {
    const editButton = document.getElementById('edit') as HTMLInputElement;
    if (editButton) {
      editButton.click();
    }
  };

  const isValidUsername = (username: string) => {
    const status = checkUsername(username, authenticatedUsernames);
    setIsValid(status);
  };

  return (
    <EditProfileCard>
      <Text {...titleStyles}>User</Text>

      <VStack spacing={3}>
        <Flex justify='center'>
          <Flex flexDirection='column' justifyContent='center'>
            <Text textAlign='center' mb={3}>
              Profile Image
            </Text>

            <Menu autoSelect={false}>
              <MenuButton
                type='button'
                display='block'
                onClick={profileData?.profile ? undefined : clickEdit}
              >
                <Box
                  boxSize='100px'
                  borderRadius='full'
                  border='1px solid'
                  borderColor={useColorModeValue('#E2E8F0', '#2a2a2a')}
                  backgroundImage={
                    previewImg || profileData?.profile || defaultProfile
                  }
                  backgroundPosition='center'
                  backgroundRepeat='no-repeat'
                  backgroundSize='cover'
                  pos='relative'
                  title={previewImg}
                  ref={previewImgRef}
                >
                  <HStack
                    pos='absolute'
                    background='#000000a3'
                    bottom='-2px'
                    color='light.cardBg'
                    px='.5rem'
                    borderRadius='5px'
                    fontSize='14px'
                    left='-6px'
                  >
                    <FaRegEdit /> <Text>Edit</Text>
                  </HStack>
                </Box>
              </MenuButton>

              <MenuList
                mx='auto !important'
                minW='0 !important'
                p='.5rem'
                w='170px'
                bg={useColorModeValue('light.cardBg', 'dark.cardBg')}
                opacity={profileData?.profile ? '1 !important' : '0 !important'}
              >
                <CustomMenuItem py='0'>
                  <label style={{ width: '100%', padding: '8px 0' }} id='edit'>
                    <Input
                      type='file'
                      display='none'
                      onChange={imagePreviewHandler}
                    />{' '}
                    Upload a photo
                  </label>
                </CustomMenuItem>

                <CustomMenuItem
                  onClick={() => removeProfileImgHandler(profileData.profile)}
                >
                  Remove photo
                </CustomMenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        <Box w='100%'>
          <Label mb='.3rem'>Name</Label>
          <Input
            defaultValue={profileData?.name}
            placeholder='Enter your name...'
            type='text'
            required
            ref={nameRef}
          />
        </Box>

        <Box w='100%'>
          <Label mb='.3rem'>Username</Label>
          <Input
            defaultValue={profileData?.username}
            placeholder='Enter your username...'
            type='text'
            required
            ref={usernameRef}
            onChange={({ target }) => isValidUsername(target.value)}
          />
          <Text color='red' fontSize='15'>
            {isValid === 'valid' ? '' : isValid}
          </Text>
        </Box>

        <Box w='100%'>
          <Label mb='.3rem'>Email address</Label>
          <Input
            defaultValue={profileData?.email}
            placeholder='example@gmail.com'
            type='email'
            ref={emailRef}
          />
        </Box>
      </VStack>
    </EditProfileCard>
  );
};

export default User;