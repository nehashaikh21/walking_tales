import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  FormHelperText,
  Textarea,
  Avatar,
  Icon,
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage, FieldArray, useFormik } from 'formik';

const initialValues = {
    workouts: [
        {
            workout: '',
            reps: '',
            weight: '',
            remember: false,
          },
      ],
  };

export default function ExercisePlan() {
    const formik = useFormik({
      initialValues : {initialValues},
      onSubmit: (values) => {
        // funciton that happens on submit, will change to mutations when we have it set up
        alert(JSON.stringify(values, null, 2));
      }
    })

return (
  <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
    <Text fonstSize={'lg'} color={'gray.600'}>
        Add Exercises
    </Text>

    <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>   
    {/* {({ values }) => ( */}
    <form onSubmit={formik.handleSubmit}>
        {console.log(formik.values.initialValues.workouts)}
        <FormControl>
            <FormLabel htmlFor='workout'>Workout</FormLabel>
            <Input
                id='workout'
                name='workout'
                type='text'
                variant='filled'
                // use handlechange, variable name is same as variable above
                onChange={formik.handleChange}
                value={formik.values.initialValues.workouts.workout}
            />
        </FormControl>
        <FormControl>
            <FormLabel htmlFor='reps'>Reps</FormLabel>
            <Input
                id='reps'
                name='reps'
                type='number'
                variant='filled'
                // use handlechange, variable name is same as variable above
                onChange={formik.handleChange}
                value={formik.values.initialValues.workouts.reps}
            />
        </FormControl>
        <FormControl>
            <FormLabel htmlFor='weight'>Weight</FormLabel>
            <Input
                id='weight'
                name='weight'
                type='number'
                variant='filled'
                // use handlechange, variable name is same as variable above
                onChange={formik.handleChange}
                value={formik.values.initialValues.workouts.weight}
            />
        </FormControl>

        <Button
            // Need type='submit' here for formik
                type='submit'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
                }}>
                Create Workout
        </Button>
                </form>
                    {/* )} */}
            </Stack>
        </Box>
    </Stack>
  </Flex>
);
};