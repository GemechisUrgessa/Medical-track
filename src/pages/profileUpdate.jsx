import { ArrowBack, Expand, Visibility, VisibilityOff } from '@mui/icons-material'
import { Alert, Box, Button, CircularProgress, IconButton, InputAdornment, MenuItem, Modal, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getDateObject } from '../helpers/dateManipulate'
import { getProfile, resetGetProfileStatus, resetLoginFormStatus, resetProfileUpdateFormStatus, userLogin, userProfileUpdate } from '../state/slices/user'

function ProfileUpdate() {


    let userState = useSelector(state => state.user)
    let userObj = useSelector(state => state.user.getProfile.profileObj)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    React.useEffect(() => {
        // dispatch(resetLoginFormStatus())
        dispatch(resetProfileUpdateFormStatus())
        dispatch(resetGetProfileStatus())
        dispatch(getProfile())
    }, [])

    let handleFirstNameChange = (e) => {
        let value = e.target.value
        if (value.length < 4) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                firstName: { ...fieldsValue.firstName, msg: 'First name must be at least 4 characters', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                firstName: { ...fieldsValue.firstName, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleLastNameChange = (e) => {
        let value = e.target.value
        if (value.length < 4) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                lastName: { ...fieldsValue.lastName, msg: 'Last name must be at least 4 characters', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                lastName: { ...fieldsValue.lastName, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleDoBChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                dob: { ...fieldsValue.dob, msg: 'Date of Birth can not be empty', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                dob: { ...fieldsValue.dob, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleGenderChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                gender: { ...fieldsValue.gender, msg: 'Select your gender', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                gender: { ...fieldsValue.gender, msg: '', value: e.target.value }
            }))
            return true
        }
    }


    let handleSSNChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                ssn: { ...fieldsValue.ssn, msg: 'Social security number can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                ssn: { ...fieldsValue.ssn, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleNationalityChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                nationality: { ...fieldsValue.nationality, msg: 'Nationality can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                nationality: { ...fieldsValue.nationality, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleTlfChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                tlf: { ...fieldsValue.tlf, msg: 'tlf can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                tlf: { ...fieldsValue.tlf, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleOrganDonorChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                organDonor: { ...fieldsValue.organDonor, msg: 'tlf can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                organDonor: { ...fieldsValue.organDonor, msg: '', value: e.target.value }
            }))
            return true
        }
    }





    // ///////////////////////////////////////////////////////////////////////////












    let handlePostnrChange = (e) => {
        let value = e.target.value
        if (value.length < 1) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                postnr: { ...fieldsValue.postnr, msg: 'This field can not be empty', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                postnr: { ...fieldsValue.postnr, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleCityChange = (e) => {
        let value = e.target.value
        if (value.length < 1) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                city: { ...fieldsValue.city, msg: 'City can not be empty', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                city: { ...fieldsValue.city, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleLandChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                land: { ...fieldsValue.land, msg: 'Land can not be empty', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                land: { ...fieldsValue.land, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleStreetChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                street: { ...fieldsValue.street, msg: 'Enter the street address', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                street: { ...fieldsValue.street, msg: '', value: e.target.value }
            }))
            return true
        }
    }


    let handleInsuraTypeChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                insuranceType: { ...fieldsValue.insuranceType, msg: 'Select insurance type', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                insuranceType: { ...fieldsValue.insuranceType, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleInsuraceCompany = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                insuranceCompany: { ...fieldsValue.insuranceCompany, msg: 'Insurance company name can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                insuranceCompany: { ...fieldsValue.insuranceCompany, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleEmerContactNameChange = (e, num) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                emergencyContact1Name: { ...fieldsValue.emergencyContact1Name, msg: 'Name can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                emergencyContact1Name: { ...fieldsValue.emergencyContact1Name, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let handleEmerContactPhoneChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                emergencyContact1phone: { ...fieldsValue.emergencyContact1phone, msg: 'Phone can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                emergencyContact1phone: { ...fieldsValue.emergencyContact1phone, msg: '', value: e.target.value }
            }))
            return true
        }
    }


    let handleEmerContactRelationChange = (e) => {
        let value = e.target.value
        if (!value) {
            setFieldsValue(previousValue => ({
                ...previousValue,
                emergencyContact1relation: { ...fieldsValue.emergencyContact1relation, msg: 'Relation can not be empty ', value: e.target.value }
            }))
            return false
        } else {
            setFieldsValue(previousValue => ({
                ...previousValue,
                emergencyContact1relation: { ...fieldsValue.emergencyContact1relation, msg: '', value: e.target.value }
            }))
            return true
        }
    }

    let noValidationChangeHanlder = (e, fieldName = 'other') => {
        setFieldsValue(previousValue => ({
            ...previousValue,
            [fieldName]: { ...fieldsValue[fieldName], msg: '', value: e.target.value }
        }))
        return true
    }

    if (userObj) {
        console.log('user data fetched', userObj)
    }

    let [fieldsValue, setFieldsValue] = React.useState({
        firstName: { value: '', msg: '', changeHandler: handleFirstNameChange },
        lastName: { value: '', msg: '', changeHandler: handleLastNameChange },
        dob: { value: '', msg: '', changeHandler: handleDoBChange },
        gender: { value: '', msg: '', changeHandler: handleGenderChange },
        ssn: { value: '', msg: '', changeHandler: handleSSNChange },
        nationality: { value: '', msg: '', changeHandler: handleNationalityChange },
        tlf: { value: '', msg: '', changeHandler: handleTlfChange },
        organDonor: { value: '', msg: '', changeHandler: handleOrganDonorChange },


        postnr: { value: '', msg: '', changeHandler: handlePostnrChange },
        city: { value: '', msg: '', changeHandler: handleCityChange },
        land: { value: '', msg: '', changeHandler: handleLandChange },
        street: { value: '', msg: '', changeHandler: handleStreetChange },
        insuranceType: { value: '', msg: '', changeHandler: handleInsuraTypeChange },
        insuranceCompany: { value: '', msg: '', changeHandler: handleInsuraceCompany },
        policyNumber: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
        alarmTelephone: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
        emergencyContact1Name: { value: '', msg: '', changeHandler: handleEmerContactNameChange },
        emergencyContact2Name: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
        emergencyContact1phone: { value: '', msg: '', changeHandler: handleEmerContactPhoneChange },
        emergencyContact2phone: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
        emergencyContact1relation: { value: '', msg: '', changeHandler: handleEmerContactRelationChange },
        emergencyContact2relation: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
        other: { value: '', msg: '', changeHandler: noValidationChangeHanlder }
    })

    let [fetchedDataUsed, setFetchedDataUsed] = React.useState(false)

    // adding existing user profile informations once they are fetched from the backend
    if (userObj && !fetchedDataUsed) {
        setFieldsValue(preValue => {
            return {
                firstName: { ...preValue.firstName, value: userObj?.firstName, msg: '', changeHandler: handleFirstNameChange },
                lastName: { ...preValue.lastName, value: userObj?.lastName, msg: '', changeHandler: handleLastNameChange },
                dob: { ...preValue.dob, value: new Date(userObj?.dateOfBirth).toISOString().substring(0, 10), msg: '', changeHandler: handleDoBChange },
                gender: { ...preValue.gender, value: userObj?.gender, msg: '', changeHandler: handleGenderChange },
                ssn: { ...preValue.ssn, value: userObj?.zip, msg: '', changeHandler: handleSSNChange },
                nationality: { ...preValue.nationality, value: userObj?.nationality, msg: '', changeHandler: handleNationalityChange },
                tlf: { ...preValue.tlf, value: userObj?.telephoneNumber, msg: '', changeHandler: handleTlfChange },
                organDonor: { ...preValue.organDonor, value: Boolean(userObj?.organDonor) ? 'yes' : 'no', msg: '', changeHandler: handleOrganDonorChange },
                postnr: { ...preValue.postnr, value: userObj?.zip, msg: '', changeHandler: handlePostnrChange },
                city: { ...preValue.city, value: userObj?.city, msg: '', changeHandler: handleCityChange },
                land: { ...preValue.land, value: userObj?.country, msg: '', changeHandler: handleLandChange },
                street: { ...preValue.street, value: userObj?.streetAddress, msg: '', changeHandler: handleStreetChange },
                insuranceType: { ...preValue.insuranceType, value: userObj?.insuranceType, msg: '', changeHandler: handleInsuraTypeChange },
                insuranceCompany: { ...preValue.insuranceCompany, value: userObj?.insuranceCompany, msg: '', changeHandler: handleInsuraceCompany },
                policyNumber: { ...preValue.policyNumber, value: userObj?.policyNumber, msg: '', changeHandler: noValidationChangeHanlder },
                alarmTelephone: { ...preValue.alarmTelephone, value: userObj?.emergencyPhone, msg: '', changeHandler: noValidationChangeHanlder },
                emergencyContact1Name: { ...preValue.emergencyContact1Name, value: userObj?.emergencyContactName, msg: '', changeHandler: handleEmerContactNameChange },
                emergencyContact2Name: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
                emergencyContact1phone: { ...preValue.emergencyContact1phone, value: userObj?.emergencyContactPhoneNo, msg: '', changeHandler: handleEmerContactPhoneChange },
                emergencyContact2phone: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
                emergencyContact1relation: { ...preValue.emergencyContact1relation, value: userObj?.relationship, msg: '', changeHandler: handleEmerContactRelationChange },
                emergencyContact2relation: { value: '', msg: '', changeHandler: noValidationChangeHanlder },
                other: { ...preValue.other, value: userObj?.other, msg: '', changeHandler: noValidationChangeHanlder },
            }
        })
        setFetchedDataUsed(true)
    }


    let formSubmitHandler = (e) => {
        e.preventDefault();
        let isFormValid = true
        for (let fieldName of Object.keys(fieldsValue)) {
            let isFieldValid = fieldsValue[fieldName].changeHandler({ target: { value: fieldsValue[fieldName].value } })
            if (!isFieldValid) {
                isFormValid = false
            }
        }
        if (isFormValid) {
            let profileInformation = {
                firstName: fieldsValue.firstName.value,
                lastName: fieldsValue.lastName.value,
                dateOfBirth: getDateObject(fieldsValue.dob.value),
                gender: fieldsValue.gender.value,
                cprNumber: Number(fieldsValue.ssn.value),
                tlfNumber: Number(fieldsValue.tlf.value),
                nationality: fieldsValue.nationality.value,
                telephoneNumber: fieldsValue.tlf.value,
                organDonor: fieldsValue.organDonor.value == 'Yes' ? true : false,
                zip: fieldsValue.ssn.value,
                city: fieldsValue.city.value,
                country: fieldsValue.land.value,
                streetAddress: fieldsValue.street.value,
                insuranceType: fieldsValue.insuranceType.value,
                insuranceCompany: fieldsValue.insuranceCompany.value,
                policyNumber: fieldsValue.policyNumber.value,
                emergencyPhone: fieldsValue.alarmTelephone.value,
                emergencyContactName: fieldsValue.emergencyContact1Name.value,
                emergencyContactPhoneNo: fieldsValue.emergencyContact1phone.value,
                relationship: fieldsValue.emergencyContact1relation.value,
                other: fieldsValue.other.value
            }
            // Object.keys(fieldsValue).forEach((fieldName) => {
            //     profileInformation[fieldName] = fieldsValue[fieldName].value
            // })
            console.log('form submitted', profileInformation)
            dispatch(userProfileUpdate(profileInformation))
        } else {
            console.log('profile update form not submitted')
        }
    }


    let handleModalClose = () => {
        dispatch(resetProfileUpdateFormStatus())
    }

    if (userState.profileUpdate.successMsg) {
        navigate('/home')
    }


    return (
        <Box bgcolor='#f8f8f8' display='flex' justifyContent='center' >

            {/* log in state UI */}
            <Modal
                open={userState.profileUpdate.loading ||
                    userState.getProfile.loading ||
                    userState.profileUpdate.errorMsg ||
                    userState.profileUpdate.successMsg
                }
                onClose={handleModalClose}
            >
                <Box display='flex'
                    position='absolute'
                    top='50%'
                    left='50%'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    sx={{ transform: 'translate(-50%,-50%)' }}
                >
                    {userState.profileUpdate.errorMsg && <Alert severity='error'>{userState.profileUpdate.errorMsg}</Alert>}
                    {userState.profileUpdate.loading && <CircularProgress color='primary' />}
                    {userState.getProfile.loading && <CircularProgress color='primary' />}

                </Box>
            </Modal>

            <Box width={{ xs: '100vw', md: '60vw', lg: '50vw' }}>
                <Box display='flex' justifycontent='start' pt={2} >
                    <Button onClick={() => navigate('/')}>
                        <ArrowBack ></ArrowBack>
                    </Button>
                </Box>

                <Box justifyContent={'space-between'} display={'flex'} flexDirection='column'>


                    {/* personal info part 1 */}

                    <Box m={2}>
                        <Box display={'flex'} flexDirection='column'>
                            <Typography variant='h4'>Personal info </Typography>
                            <Typography variant='body1' color='gray' >Please fill your personal information to create an account you can change them later</Typography>
                        </Box>
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.firstName.value} onChange={fieldsValue.firstName.changeHandler} size='small' label='First Name'></TextField>
                        </Box>
                        {fieldsValue.firstName.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.firstName.msg}</Alert> : <></>}
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.lastName.value} onChange={fieldsValue.lastName.changeHandler} size='small' label='Last Name' ></TextField>
                        </Box>
                        {fieldsValue.lastName.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.lastName.msg}</Alert> : <></>}

                        <Box display={'flex'} justifyContent='space-between'>
                            <Box mt={2} flexGrow={1}>
                                <Box bgcolor='white' flexGrow={1}>
                                    <TextField placeholder='yy/mm/dd' fullWidth={true} value={fieldsValue.dob.value}
                                        onChange={fieldsValue.dob.changeHandler} size='small' label='Date of Birth' ></TextField>
                                </Box>
                                {fieldsValue.dob.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.dob.msg}</Alert> : <></>}
                            </Box>
                            <Box mt={2} flexGrow={2}>
                                <Box bgcolor='white' flexGrow={1} ml={1}>
                                    <TextField fullWidth={true} select value={fieldsValue.gender.value} onChange={fieldsValue.gender.changeHandler} size='small' label='Gender' >
                                        <MenuItem value={'Male'}>
                                            Male
                                        </MenuItem>
                                        <MenuItem value={'Female'}>
                                            Female
                                        </MenuItem>
                                    </TextField>
                                </Box>
                                {fieldsValue.gender.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.gender.msg}</Alert> : <></>}
                            </Box>
                        </Box>

                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.ssn.value} type='number' onChange={fieldsValue.ssn.changeHandler} size='small' label='Social Security Number ( Optional )' ></TextField>
                        </Box>
                        {fieldsValue.ssn.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.ssn.msg}</Alert> : <></>}
                       
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.nationality.value} onChange={fieldsValue.nationality.changeHandler} size='small' label='Nationality' ></TextField>
                        </Box>
                        {fieldsValue.nationality.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.nationality.msg}</Alert> : <></>}
                       
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true}  type='number' value={fieldsValue.tlf.value} onChange={fieldsValue.tlf.changeHandler} size='small' label='Tlf nr' ></TextField>
                        </Box>
                        {fieldsValue.tlf.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.tlf.msg}</Alert> : <></>}

                        <Typography>Would you like to be an organ donor?</Typography>
                        <Box my={0.5} bgcolor='white'>
                            <TextField fullWidth={true} select value={fieldsValue.organDonor.value} onChange={fieldsValue.organDonor.changeHandler} size='small' label='' >
                                <MenuItem value={'yes'}>
                                    Yes
                                </MenuItem>
                                <MenuItem value={'no'}>
                                    No
                                </MenuItem>
                            </TextField>
                        </Box>
                        {fieldsValue.organDonor.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.organDonor.msg}</Alert> : <></>}
                        <Typography color={'gray'} >Healthcare Proffessionals will be required to ask family to confirm your decision</Typography>



                        {/* personal infor part 2 */}

                        <Box height={50}></Box>
                        <Typography variant='h4' >Personal info</Typography>
                        <Typography color={'gray'} >Fill the address you want us to send the card to. The address will not appear on the emergency card</Typography>
                        <Box display={'flex'} justifyContent='space-between'>
                            <Box mt={2} flexGrow={1}>
                                <Box bgcolor='white' flexGrow={1}>
                                    <TextField fullWidth={true} type='number' value={fieldsValue.postnr.value}
                                        onChange={fieldsValue.postnr.changeHandler} size='small' label='Postnr./-sted' ></TextField>
                                </Box>
                                {fieldsValue.postnr.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.postnr.msg}</Alert> : <></>}
                            </Box>
                            <Box flexGrow={1} ml={1}>
                                <Box mt={2} bgcolor='white' flexGrow={1} ml={1}>
                                    <TextField fullWidth={true} value={fieldsValue.city.value} onChange={fieldsValue.city.changeHandler} size='small' label='City' ></TextField>
                                </Box>
                                {fieldsValue.city.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.city.msg}</Alert> : <></>}
                            </Box>
                        </Box>
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} select value={fieldsValue.land.value} onChange={fieldsValue.land.changeHandler} size='small' label='Land' >
                                <MenuItem value={'Ethiopia'}>
                                    Ethiopia
                                </MenuItem>
                                <MenuItem value={'Sudan'}>
                                    Sudan
                                </MenuItem>
                                <MenuItem value={'USA'}>
                                    USA
                                </MenuItem>
                                <MenuItem value={'Egypt'}>
                                    Egypt
                                </MenuItem>
                            </TextField>
                        </Box>
                        {fieldsValue.land.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.land.msg}</Alert> : <></>}
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.street.value} onChange={fieldsValue.street.changeHandler} size='small' label='Street Address' ></TextField>
                        </Box>
                        {fieldsValue.street.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.street.msg}</Alert> : <></>}



                        {/* insurance */}

                        <Box height={50}></Box>
                        <Typography variant='h4' >Insurance</Typography>
                        <Typography color={'gray'} >Add insurance information for reference</Typography>
                        <Box my={2} bgcolor='white'>
                            <TextField defaultValue={'Yes'} fullWidth={true} select value={fieldsValue.insuranceType.value}
                                onChange={fieldsValue.insuranceType.changeHandler} size='small' label='Type of Insurance' >
                                <MenuItem value={'Travel'}>
                                    Travel Insurance
                                </MenuItem>
                                <MenuItem value={'Health'}>
                                    Health Insurance
                                </MenuItem>
                            </TextField>
                        </Box>
                        {fieldsValue.insuranceType.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.insuranceType.msg}</Alert> : <></>}

                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.insuranceCompany.value}
                                onChange={fieldsValue.insuranceCompany.changeHandler} size='small' label='Insurance Company' ></TextField>
                        </Box>
                        {fieldsValue.insuranceCompany.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.insuranceCompany.msg}</Alert> : <></>}
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.policyNumber.value}
                                onChange={e => fieldsValue.policyNumber.changeHandler(e, 'policyNumber')} size='small' label='Policy Number( Optional )' ></TextField>
                        </Box>
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.alarmTelephone.value}
                                onChange={e => fieldsValue.alarmTelephone.changeHandler(e, 'alarmTelephone')} size='small' label='Alarm Telephone( Optional )' ></TextField>
                        </Box>



                        {/* emergency contacts */}

                        <Box height={50}></Box>
                        <Typography variant='h4' >Emergency Contacts</Typography>
                        <Typography color={'gray'} >Add contacts that you trust in case of an emergency</Typography>
                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.emergencyContact1Name.value} onChange={fieldsValue.emergencyContact1Name.changeHandler} size='small' label='Name' ></TextField>
                        </Box>
                        {fieldsValue.emergencyContact1Name.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.emergencyContact1Name.msg}</Alert> : <></>}
                        <Box mt={1} display={'flex'} justifyContent='space-between'>
                            <Box flexGrow={1}>
                                <Box bgcolor='white' flexGrow={1}>
                                    <TextField fullWidth={true} value={fieldsValue.emergencyContact1phone.value}
                                        onChange={fieldsValue.emergencyContact1phone.changeHandler} size='small' label='Phone number' ></TextField>
                                </Box>
                                {fieldsValue.emergencyContact1phone.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.emergencyContact1phone.msg}</Alert> : <></>}
                            </Box>
                            <Box flexGrow={1} ml={1}>
                                <Box bgcolor='white' flexGrow={1} ml={1}>
                                    <TextField fullWidth={true} value={fieldsValue.emergencyContact1relation.value} onChange={fieldsValue.emergencyContact1relation.changeHandler} size='small' label='Relationship' ></TextField>
                                </Box>
                                {fieldsValue.emergencyContact1relation.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.emergencyContact1relation.msg}</Alert> : <></>}
                            </Box>
                        </Box>

                        <Box my={2} bgcolor='white'>
                            <TextField fullWidth={true} value={fieldsValue.emergencyContact2Name.value}
                                onChange={e => fieldsValue.emergencyContact2Name.changeHandler(e, 'emergencyContact2Name')} size='small' label='Name' ></TextField>
                        </Box>
                        {fieldsValue.emergencyContact2Name.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.emergencyContact2Name.msg}</Alert> : <></>}
                        <Box display={'flex'} justifyContent='space-between'>
                            <Box flexGrow={1}>
                                <Box bgcolor='white' flexGrow={1}>
                                    <TextField fullWidth={true} value={fieldsValue.emergencyContact2phone.value}
                                        onChange={e => fieldsValue.emergencyContact2phone.changeHandler(e, 'emergencyContact2phone')} size='small' label='Phone number' ></TextField>
                                </Box>
                                {fieldsValue.emergencyContact2phone.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.emergencyContact2phone.msg}</Alert> : <></>}
                            </Box>
                            <Box flexGrow={1} ml={1}>
                                <Box bgcolor='white' flexGrow={1} ml={1}>
                                    <TextField fullWidth={true} value={fieldsValue.emergencyContact2relation.value}
                                        onChange={e => fieldsValue.emergencyContact2relation.changeHandler(e, 'emergencyContact2relation')} size='small' label='Relationship' ></TextField>
                                </Box>
                            </Box>
                            {fieldsValue.emergencyContact2relation.msg ? <Alert sx={{ padding: 0, marginTop: 1 }} severity="error">{fieldsValue.emergencyContact2relation.msg}</Alert> : <></>}
                        </Box>



                        {/* other */}

                        <Box height={50}></Box>
                        <Typography variant='h4' >Other</Typography>
                        <Box my={2} mb={6} bgcolor='white'>
                            <TextField fullWidth={true} multiline rows={5} value={fieldsValue.other.value}
                                onChange={e => fieldsValue.other.changeHandler(e, 'other')} size='small' label=''
                                placeholder='Do you want to include other information?'
                            ></TextField>
                        </Box>

                    </Box>
                    <Box position='fixed' boxSizing={'border-box'}
                        bottom={0} px={2}
                        width={{ xs: '90%', sm: '50%', md: '50%' }} display={'flex'}
                        flexDirection={'column'} alignItems='center'
                    >
                        <Box width='100%' p={2} borderRadius={30} overflow='hidden'>
                            <Button onClick={formSubmitHandler} fullWidth type='submit' variant='contained'>Save</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default ProfileUpdate