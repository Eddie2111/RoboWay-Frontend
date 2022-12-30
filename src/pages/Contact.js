import { useState } from 'react';
import { Slider,Box, SliderTrack, SliderFilledTrack, Tooltip, SliderThumb } from '@chakra-ui/react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import { IoChevronUpCircleSharp } from 'react-icons/io5';
function Contact() {
    const [selectedOption, setSelectedOption] = useState('');
    const [pricingOptions, setPricingOptions] = useState(7000);
    const [showTooltip, setShowTooltip] = useState(true);
    const [CustomName, setCustomName] = useState("N/A");
    const [priceDiscussionTest, setPriceDiscussionTest] = useState("false");
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    }
    
  const priceRange = [
    { id: 1, name: '3000-8000' },
    { id: 2, name: '8000-12000' },
    { id: 3, name: '12000-18000' },
    { id: 4, name: '18000++' },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    if (value.priceDiscussion) {
        setPriceDiscussionTest("True");
    }
    if (!value.priceDiscussion) {
        setPriceDiscussionTest("False");
    }
    if (value.customName) {
        setCustomName(value.customName);
    }
    if (!value.customName === ""){
        setCustomName("N/A");
    }

    const dataset = {
        name: value.name,
        email: value.email,
        subject: value.subject,
        description: value.description,
        priceDiscussion: priceDiscussionTest,
        addtional: value.addtional,
        projectName: selectedOption,
        customName: CustomName,
        pricingOptions: pricingOptions,
    }
    await axios.post('http://localhost:3001/contact', dataset,{withCredentials: true, headers: {'Content-Type': 'application/json'} })
    console.log(dataset);
    };

  return (
    <>
    <SEO title={"Contact us"}/>
    <Navbar/>
    <div className="card container" style={{maxWidth:"970px"}}>
    <form onSubmit={handleSubmit}>
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
        <label className="form-label" >Name</label>
        <input type="text" id="form6Example1" required name="name" className="form-control" />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
        <label className="form-label" >Email</label>
        <input type="email" id="form6Example2" required name="email" className="form-control" />
      </div>
    </div>
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Subject <span className="disabled">(Project name, Your concern etc )</span></label>
    <input type="text" id="form6Example3" required name="subject" className="form-control" />
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Project Category <span className='disabled'>(Choose Custom Project if your criteria not present here)</span> </label>
      <select value={selectedOption} required onChange={handleChange} className="form-select">
          <option value="default">Choose an option</option>
          <option value="Class Attendance System">Class Attendance System</option>
          <option value="Home Automation System">Home Automation System</option>
          <option value="Smart Parking System">Smart Parking System</option>
          <option value="Smart Waste Management System">Smart Waste Management System</option>
          <option value="Smart Agriculture System">Smart Agriculture System</option>
            <option value="Custom Project">Custom Project</option>
        </select>
        <br/>
  <input type={selectedOption === "Custom Project" ? "text" : "hidden"} id="form6Example6" name="customName" className="form-control"
  placeholder='What is your project about?' required/>  
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Describe Your Project <span className="disabled">(Describe shortly what you require in your project)</span></label>
    <textarea name="description" id="form6Example5" required rows={5} className="form-control" />
    
  </div>

  
  <div className="form-outline mb-4">
  <label className="form-label" >Price Range <span className="disabled">(Suitable budget range for your project)</span></label>  <br/>

<br/>
<Slider
w={["90%", "50%", "50%", "75%"]}
      id='slider' defaultValue={7000} 
      min={3000} max={19000} colorScheme='blue'
      onChange={(v) => setPricingOptions(v)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='blue.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${pricingOptions}৳`}
      >
        <SliderThumb boxSize={6}>
        <Box color='blue.300' as={IoChevronUpCircleSharp} h={8} w={8}/>
            </SliderThumb>
      </Tooltip>
    </Slider>
    <p> Selected Approximate Amount: Around {pricingOptions} Taka</p>
</div>
<div className="form-check form-check-inline">
   <label className="form-check-label" >Need Discussion</label>
   <input className="form-check-input" type="checkbox" name="priceDiscussion" id="inlineRadio1" value="True"/>
</div>


  <div className="form-outline mb-4">
  <label className="form-label">Additional information <span className="disabled"> (leave empty if no other inqueries) </span> </label>
    <textarea className="form-control" id="form6Example7" name="addtional" rows="4"></textarea>
    
  </div>
    <center>
  <button className="button2 btn btn-primary" type="submit">Submit </button>
    </center>
<br/>
</form>
</div>
    </>
  );
}

export default Contact;

/*
  <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio1" value="option1"/>
  <label className="form-check-label" >{priceRange[0].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio2" value="option2"/>
  <label className="form-check-label" >{priceRange[1].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" >{priceRange[2].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" >{priceRange[3].name}</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  <label className="form-check-label" >Need discussion</label>
</div>

// alada bhai
    <label className="form-check-label" >Need discussion</label>
    <input className="form-check-input" type="radio" name="priceOptions" id="inlineRadio3" value="option3" />
  
*/