import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const calculatedBMI = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBMI.toFixed(2));
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        BMI Calculator
      </Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="weight">
          <FormLabel>Weight (kg)</FormLabel>
          <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </FormControl>
        <FormControl id="height">
          <FormLabel>Height (cm)</FormLabel>
          <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={calculateBMI}>
          Calculate BMI
        </Button>
        {bmi && (
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Your BMI: {bmi}
            </Text>
            <Text>{bmi < 18.5 ? "You are underweight." : bmi >= 18.5 && bmi <= 24.9 ? "You have a healthy weight." : bmi >= 25 && bmi <= 29.9 ? "You are overweight." : "You are obese."}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
