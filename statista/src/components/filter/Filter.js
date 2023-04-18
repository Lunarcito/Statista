import React from 'react'
import { useState, useEffect } from "react";
import rawData from '../../data/filter.json';
import '../../components/filter/Filter.css';
import {HStack, SliderThumb} from '@chakra-ui/react';
import {Select} from '@chakra-ui/react';
import {
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    Box,
    Stack
  } from '@chakra-ui/react'
  import { Button} from '@chakra-ui/react'

export default function Filter({setActiveSelect}) {
    const[selectedDeviceType, setSelectedDeviceType]=useState("");
    const[selectedBrand, setSelectedBrand]=useState("");
    const[selectedModel, setSelectedModel]=useState("");
    const[selectedPrice, setSelectedPrice]=useState(0);
    const[selectedDate, setSelectedDate]=useState(0);

    const resetValues = () => {
        setSelectedDeviceType("")
        setSelectedBrand("")
        setSelectedModel("")
        setSelectedPrice("")
        setSelectedDate("")
    };

    useEffect(()=>{
        setActiveSelect([selectedDeviceType,selectedBrand,selectedModel])
    },[selectedDeviceType,selectedBrand,selectedModel,setActiveSelect]);

    return(
        <div className="filter-container">
            <HStack spacing={20}>
                <div className="filter-box">
                    <h5 className='label'>Device type</h5>  
                    <Select bg ='RGBA(0, 0, 0, 0.16)' size="md" variant='filled' placeholder="Device" value={selectedDeviceType} onChange={(e)=>setSelectedDeviceType(e.target.value)}>
                    {
                        rawData.filters.map((i => (
                            <option value={i.device}>{i.device}</option>
                        )))
                    }
                    </Select>
                </div>
                <div className="filter-box">
                    <h5 className='label'>Brand</h5>
                    <Select bg ='RGBA(0, 0, 0, 0.16)' size="md" variant='filled' placeholder='Brand' value={selectedBrand} onChange={(e)=>setSelectedBrand(e.target.value)}>
                    {
                        rawData.filters
                        .filter((i => (i.device === selectedDeviceType)))
                        .flatMap((i => i.brand))
                        .map((i => (
                            <option value={i.name}>{i.name}</option>
                        )))
                    }
                    </Select>
                </div>
                <div className="filter-box">
                    <h5 className='label'>Model</h5>
                    <Select bg='RGBA(0, 0, 0, 0.16)' size="md" placeholder='Model' value={selectedModel} onChange={(e)=>setSelectedModel(e.target.value)}>
                    {
                        rawData.filters
                        .filter((i => (i.device === selectedDeviceType)))
                        .flatMap((i => i.brand))
                        .filter((i => (i.name === selectedBrand)))
                        .flatMap((i => i.model))
                        .map((i => (
                            <option value={i}>{i}</option>
                        )))
                    }
                    </Select>
                </div>
                <div className="filter-box">
                    <h5>Date</h5>
                    <Box pt={5} pb={2}>
                    <Slider aria-label='slider-ex-6' min={1} max={12} step={1} onChange={(val) => setSelectedDate(val) }>
                        <SliderMark value={1}>Jan</SliderMark>
                        <SliderMark value={12}>Dec</SliderMark>
                        <SliderMark
                         textAlign='center'
                         color='blue.900'
                         mt='-8'
                         ml='7'
                         w='8'>
                            {selectedDate}
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack bg='blue.900'/>
                        </SliderTrack>
                        <SliderThumb/>
                    </Slider>
                    </Box>
                </div>
                <div className="filter-box">
                    <h5>Price</h5>
                    <Box pt={5} pb={2}>
                    <Slider aria-label='slider-ex-6' min={100} max={900} step={100} onChange={(val) => setSelectedPrice(val) }>
                        <SliderMark value={100}>100</SliderMark>
                        <SliderMark value={900}>900</SliderMark>
                        <SliderMark value={500}>500</SliderMark>
                        <SliderMark
                         textAlign='center'
                         color='blue.900'
                         mt='-8'
                         ml='6'
                         w='8'>
                            {selectedPrice}
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack bg='blue.900'/>
                        </SliderTrack>
                        <SliderThumb/>
                    </Slider>
                    </Box>
                </div>
                <div className="filter-box">
                <Stack direction='row' spacing={4}>
                    <Button bg ='RGBA(0, 0, 0, 0.16)' size="md" placeholder='Model' onClick={resetValues}>
                        Clear filters
                    </Button>
                    </Stack>
                </div>            
                
            </HStack>
            </div>
    )
}
