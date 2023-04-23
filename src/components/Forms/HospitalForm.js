import React, { useState } from 'react';
import { FormContainer, Form, Input, Label, Button, Colapsable, ColapsableContent, ColapsableContentWapper, FirstLastNameContent, ColapsableHeader, ColapsableIcon, 
         CircleMinus, CirclePlus, FormP, RadioLabel, RadioWrapper, RadioInput, ColapsableContentWapper2col, TermsLink } from './FormsElement';
import { FormHeader } from './FormHeader';
import { MoreDesign } from '../ReadMore/MoreDesign';
import { UIUXData } from '../Showcase/UIUXData';

export const HospitalForm = () => {

  const [openPatientInformation, setOPenPatientInformation] = useState(true);
  const [openContactPerson, setOPenContactPerson] = useState(true);
  const [openAgreement, setOPenAgreement] = useState(true);

  const [isUnderAge, setAgeStatus] = useState(1); // 0: no show, 1: show yes, 2: show no.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const togglePatientInformation = () => {
    setOPenPatientInformation(!openPatientInformation);
  };

  const toggleContactPerson = () => {
    setOPenContactPerson(!openContactPerson);
  };

  const toggleAgreement = () => {
    setOPenAgreement(!openAgreement);
  };
  return (
    <React.Fragment>
      <FormHeader Header={'Patient Admission Form'} 
                  Subitle={'Providing us with accurate information helps us ensure the best possible care for you.'}
                  BgURL={'https://lavaritte.com/images/codioful-formerly-gradienta-bKESVqfxass-unsplash.jpg'} />
        <FormContainer>
            <Form onSubmit={handleSubmit}>
              <ColapsableContentWapper2col>
                <ColapsableContent>
                  <Label htmlFor='DoctorsName'>Doctor's Name</Label>
                  <FirstLastNameContent>
                  <Input type="text" name="DoctorsFName" placeholder="First Name" value={formData.name} onChange={handleChange} required />
                  <Input style={{marginRight: '0'}} type="text" name="DoctorsLName" placeholder="Last Name" value={formData.name} onChange={handleChange} required />
                  </FirstLastNameContent>
                </ColapsableContent>
                <ColapsableContent>
                  <Label htmlFor='AdmissionDate'>Admission Date</Label>
                  <Input type="date" name="AdmissionDate" placeholder="MM/DD/YYYY" value={formData.date} onChange={handleChange} required />
                </ColapsableContent>
                <ColapsableContent>
                  <Label htmlFor='AdmissionDate'>Planned Procedure</Label>
                  <Input type="text" name="PlannedProcedure" placeholder="" value={formData.name} onChange={handleChange} required />
                </ColapsableContent>
                <ColapsableContent>
                  <Label htmlFor='AdmissionDate'>Item Number(s)</Label>
                  <Input type="text" name="ItemNumber" placeholder="Item Number" value={formData.date} onChange={handleChange} required />
                </ColapsableContent>
              </ColapsableContentWapper2col>
              <Colapsable onClick={togglePatientInformation}>
                <ColapsableHeader>Patient Information</ColapsableHeader>
                <ColapsableIcon>{openPatientInformation ? <CircleMinus/>: <CirclePlus/>}</ColapsableIcon>
              </Colapsable>
              {
                openPatientInformation &&
                <ColapsableContentWapper>
                  <ColapsableContentWapper2col>
                  <ColapsableContent>
                    <Label htmlFor='DoctorsName'>Patient Name</Label>
                    <FirstLastNameContent>
                    <Input type="text" name="PatientFName" placeholder="First Name" value={formData.name} onChange={handleChange} required />
                    <Input style={{marginRight: '0'}} type="text" name="PatientLName" placeholder="Last Name" value={formData.name} onChange={handleChange} required />
                    </FirstLastNameContent>
                  </ColapsableContent>
                  <ColapsableContent>
                    <Label htmlFor='BirthDate'>Date of Birth</Label>
                    <Input type="date" name="BirthDate" placeholder="MM/DD/YYYY" value={formData.date} onChange={handleChange} required />
                  </ColapsableContent>
                  <ColapsableContent>
                    <FormP>Gender</FormP>
                    <RadioWrapper>
                      <div>
                      <RadioInput type="radio" id="Male" name="Gender" value="Male"/>
                      <RadioLabel for='Male'>Male</RadioLabel>
                      </div>

                      <div>
                      <RadioInput type="radio" id="Female" name="Gender" value="Female"/>
                      <RadioLabel for='Female'>Female</RadioLabel>

                      </div>
                      <div>
                      <RadioInput type="radio" id="Other" name="Gender" value="Other"/>
                      <RadioLabel for='Other'>Other</RadioLabel>
                      </div>
                    </RadioWrapper>
                  </ColapsableContent>
                  <ColapsableContent>
                    <FormP>Marital Status</FormP>
                    <RadioWrapper>
                      <div>
                      <RadioInput type="radio" id="Single" name="MaritalStatus" value="Single"/>
                      <RadioLabel for='Single'>Single</RadioLabel>
                      </div>

                      <div>
                      <RadioInput type="radio" id="Married" name="MaritalStatus" value="Married"/>
                      <RadioLabel for='Married'>Married</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="Divorced" name="MaritalStatus" value="Divorced"/>
                      <RadioLabel for='Divorced'>Divorced</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="Widowed" name="MaritalStatus" value="Widowed"/>
                      <RadioLabel for='Widowed'>Widowed</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="Separated" name="MaritalStatus" value="Separated"/>
                      <RadioLabel for='Separated'>Separated</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="OtherStatus" name="MaritalStatus" value="Other"/>
                      <RadioLabel for='OtherStatus'>Other</RadioLabel>
                      </div>
                    </RadioWrapper>
                  </ColapsableContent>
                  </ColapsableContentWapper2col>
                  <ColapsableContent>
                    <FormP>The patient under the age of 18 years?</FormP>
                    <RadioWrapper>
                      <div>
                      <RadioInput onClick={() => {setAgeStatus(true)}} type="radio" id="Yes" name="underAge" value="Yes"/>
                      <RadioLabel for='Yes'>Yes</RadioLabel>
                      </div>

                      <div>
                      <RadioInput onClick={() => {setAgeStatus(false)}} type="radio" id="No" name="underAge" value="No"/>
                      <RadioLabel for='No'>No</RadioLabel>
                      </div>
                    </RadioWrapper>
                  </ColapsableContent>
                  { isUnderAge ? 
                      <div>
                        <ColapsableContent>
                          <Label htmlFor='DoctorsName'>Parent/Guardian Name</Label>
                          <FirstLastNameContent>
                          <Input type="text" name="PatientFName" placeholder="First Name" value={formData.name} onChange={handleChange} required />
                          <Input style={{marginRight: '0'}} type="text" name="PatientLName" placeholder="Last Name" value={formData.name} onChange={handleChange} required />
                          </FirstLastNameContent>
                      </ColapsableContent>
                      </div> : null
                  }
                  <ColapsableContent>
                    <FormP>Employment Status of patient (or parent if patient is under 18)</FormP>
                    <RadioWrapper>
                      <div>
                      <RadioInput type="radio" id="Employed" name="Employment" value="Employed"/>
                      <RadioLabel for='Employed'>Employed</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="Unemployed" name="Employment" value="Unemployed"/>
                      <RadioLabel for='Unemployed'>Unemployed</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="Retired" name="Employment" value="Retired"/>
                      <RadioLabel for='Retired'>Retired</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="radio" id="OtherEmployment" name="Employment" value="Other"/>
                      <RadioLabel for='OtherEmployment'>Other</RadioLabel>
                      </div>
                    </RadioWrapper>
                  </ColapsableContent>
                  <ColapsableContentWapper2col>
                    <div style={{marginRight: '10px'}}>
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="tel" name="phone" placeholder="(000) 000-0000" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                    <Label htmlFor="email">Email</Label>
                    <Input style={{marginRight: '0px'}} type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </ColapsableContentWapper2col>
                  <ColapsableContent>
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" name="address" placeholder="Enter your street address" value={formData.address} onChange={handleChange} required />
                  </ColapsableContent>
                  <ColapsableContentWapper2col style={{padding: 0}}>
                    <ColapsableContent>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
                    </ColapsableContent>
                    <ColapsableContent>
                      <Label htmlFor="state">State</Label>
                      <Input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />
                    </ColapsableContent>
                  </ColapsableContentWapper2col>
                  <ColapsableContent>
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input type="text" name="zip" placeholder="Enter your zip code" value={formData.zip} onChange={handleChange} required />
                  </ColapsableContent>
                  <ColapsableContent>
                    <FormP>Which one(s) do you prefer to be contacted by</FormP>
                    <RadioWrapper>
                      <div>
                      <RadioInput type="checkbox" id="Phone" name="prefercontacted" value="Phone"/>
                      <RadioLabel for='Phone'>Phone</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="checkbox" id="Email" name="prefercontacted" value="Email"/>
                      <RadioLabel for='Email'>Email</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="checkbox" id="Post" name="prefercontacted" value="Post"/>
                      <RadioLabel for='Post'>Post</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="checkbox" id="SMS" name="prefercontacted" value="SMS"/>
                      <RadioLabel for='SMS'>Post</RadioLabel>
                      </div>
                      <div>
                      <RadioInput type="checkbox" id="OtherEmployment" name="prefercontacted" value="Other"/>
                      <RadioLabel for='Otherprefercontacted'>Other</RadioLabel>
                      </div>
                    </RadioWrapper>
                  </ColapsableContent>
                </ColapsableContentWapper>
              }
              <Colapsable onClick={toggleContactPerson}>
                <ColapsableHeader>Next of Kin/Contact Person</ColapsableHeader>
                <ColapsableIcon>{openContactPerson ? <CircleMinus/>: <CirclePlus/>}</ColapsableIcon>
              </Colapsable>
              {
                openContactPerson &&
                <ColapsableContentWapper>
                  <ColapsableContentWapper2col>
                    <ColapsableContent>
                      <Label htmlFor='DoctorsName'>Name</Label>
                      <FirstLastNameContent>
                      <Input type="text" name="ContactFName" placeholder="First Name" value={formData.name} onChange={handleChange} required />
                      <Input style={{marginRight: '0'}} type="text" name="ContactLName" placeholder="Last Name" value={formData.name} onChange={handleChange} required />
                      </FirstLastNameContent>
                    </ColapsableContent>
                    <ColapsableContent>
                      <Label htmlFor='Relationship'>Relationship to Patient</Label>
                      <Input type="text" name="Relationship" placeholder="Mother, Father, Son, Daugther, etc." value={formData.name} onChange={handleChange} required />
                    </ColapsableContent>
                  </ColapsableContentWapper2col>
                  
                  <ColapsableContentWapper2col>
                    <div style={{marginRight: '10px'}}>
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="tel" name="phone" placeholder="(000) 000-0000" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                    <Label htmlFor="email">Email</Label>
                    <Input style={{marginRight: '0px'}} type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                    </div>
                  </ColapsableContentWapper2col>
                  <ColapsableContent>
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" name="address" placeholder="Enter your street address" value={formData.address} onChange={handleChange} required />
                  </ColapsableContent>
                  <ColapsableContentWapper2col style={{padding: 0}}>
                    <ColapsableContent>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" name="city" placeholder="Enter your city" value={formData.city} onChange={handleChange} required />
                    </ColapsableContent>
                    <ColapsableContent>
                      <Label htmlFor="state">State</Label>
                      <Input type="text" name="state" placeholder="Enter your state" value={formData.state} onChange={handleChange} required />
                    </ColapsableContent>
                  </ColapsableContentWapper2col>
                  <ColapsableContent>
                    <Label htmlFor="zip">Zip Code</Label>
                    <Input type="text" name="zip" placeholder="Enter your zip code" value={formData.zip} onChange={handleChange} required />
                  </ColapsableContent>
                </ColapsableContentWapper>
              }
              <Colapsable onClick={toggleAgreement}>
                <ColapsableHeader>Agreement</ColapsableHeader>
                <ColapsableIcon>{openAgreement ? <CircleMinus/>: <CirclePlus/>}</ColapsableIcon>
              </Colapsable>
              {
                openAgreement && 
                <ColapsableContentWapper>
                  <ColapsableContent style={{margin: '20px 0'}}>
                    <div>
                    <RadioInput type="checkbox" id="agree" name="terms" value="agree"/>
                    <RadioLabel for='agree'>I agree to <TermsLink to='/faq'>terms & conditions</TermsLink></RadioLabel>
                    </div>
                  </ColapsableContent>
                  <ColapsableContent style={{margin: '20px 10px'}}>
                      <Label htmlFor='BirthDate'>Date of Birth</Label>
                      <Input type="date" name="BirthDate" placeholder="MM/DD/YYYY" value={formData.date} onChange={handleChange} required />
                  </ColapsableContent>
                </ColapsableContentWapper>
                // Add Jotform Sign
              }
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
      <MoreDesign Data={UIUXData} Hide={'UI001'} />
    </React.Fragment>
  )
}