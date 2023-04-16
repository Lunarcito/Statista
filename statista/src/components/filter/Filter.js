import React from 'react'
// import data from '../../data/filter.json';
import '../../components/filter/Filter.css';
import {HStack} from '@chakra-ui/react';
import {Select} from '@chakra-ui/react';
import {
    RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
  } from '@chakra-ui/react'

function Filter() {
    return(
        <div className="filter-container">
            <HStack spacing={3}>
                <Select placeholder='Device'>
                <option value='mobiles'>Mobile</option>
                <option value='laptop'>Laptop</option>
                <option value='tablet'>Tablet</option>
                </Select>
                <Select placeholder='Brand'>
                <option value='apple'>Apple</option>
                <option value='samsung'>Samsung</option>
                <option value='xiaomi'>Xiaomi</option>
                </Select>
                <Select placeholder='Model'>
                <option value='iphone 14'>iphone 14</option>
                <option value='Galaxy S22'>Galaxy S22</option>
                <option value='Xiaomi 13 Pro'>Xiaomi 13 Pro</option>
                </Select>

                <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>
                    <RangeSliderTrack bg='red.100'>
                        <RangeSliderFilledTrack bg='tomato' />
                        </RangeSliderTrack>
                        <RangeSliderThumb boxSize={6} index={0} />
                        <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
            </HStack>
           
        </div>
    )
}
export default Filter;