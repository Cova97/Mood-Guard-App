import React, { useState, useRef, useEffect } from 'react';
import {
  Box, Input, Button, VStack, HStack, Text, Spinner,
  Flex, Tooltip
} from '@chakra-ui/react';
import { sendMessage } from '../services/apiService';

const Chat = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container) {
      const handleScroll = () => {
        setShowScrollToTop(container.scrollTop > 100);
      };
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userMessage.trim() === '') return;

    const newChatHistory = [...chatHistory, { role: 'user', message: userMessage }];
    setChatHistory(newChatHistory);
    setLoading(true);
    setUserMessage('');

    try {
      const response = await sendMessage(userMessage);
      setChatHistory(prev => [...prev, { role: 'system', message: response.message }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'system', message: 'Error al obtener la respuesta' }]);
    }

    setLoading(false);
  };

  return (
    <Box 
      p={[3, 4, 5]} 
      maxW={["100%", "600px"]} 
      mx="auto" 
      h={["100vh", "auto"]}
      display="flex" 
      flexDirection="column"
      border="1px solid" 
      borderColor="lapisLazuli.500" 
      borderRadius="md" 
      bg="cream.50"
      position="relative"
    >
      <Text fontSize={["xl", "2xl"]} mb={4} color="lapisLazuli.500" fontWeight="bold">
        Chat con Mood Guardian
      </Text>
      <VStack spacing={4} align="stretch" flex={1}>
        <Box 
          ref={chatContainerRef}
          bg="teal.50" 
          p={4} 
          borderRadius="md" 
          flex={1}
          overflowY="auto" 
          border="1px solid" 
          borderColor="teal.200"
          position="relative"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'teal.200',
              borderRadius: '24px',
            },
          }}
        >
          {chatHistory.map((chat, index) => (
            <Flex 
              key={index} 
              justifyContent={chat.role === 'user' ? 'flex-end' : 'flex-start'}
              mb={2}
            >
              <Box 
                bg={chat.role === 'user' ? 'mint.200' : 'persianGreen.200'} 
                p={3} 
                borderRadius="lg" 
                maxW="75%"
                color={chat.role === 'user' ? 'mint.900' : 'persianGreen.900'}
                boxShadow="md"
              >
                <Text fontWeight="bold" mb={1}>
                  {chat.role === 'user' ? 'Tú' : 'Mood Guardian'}
                </Text>
                <Text>{chat.message}</Text>
              </Box>
            </Flex>
          ))}
          {loading && (
            <HStack justifyContent="center" mt={2}>
              <Spinner color="lapisLazuli.500" />
              <Text ml={2} color="gray.500">Cargando respuesta...</Text>
            </HStack>
          )}
        </Box>
        <Flex as="form" onSubmit={handleSubmit} alignItems="center">
          <Input 
            value={userMessage} 
            onChange={(e) => setUserMessage(e.target.value)} 
            placeholder="Escribe tu mensaje" 
            variant="filled" 
            bg="cream.100"
            _hover={{ bg: "cream.200" }}
            _focus={{ bg: "cream.200", borderColor: "lapisLazuli.500" }}
            mr={2}
            flex={1}
            disabled={loading}
          />
          <Tooltip label="Enviar mensaje" placement="top" hasArrow>
            <Button
              type="submit"
              colorScheme="lapisLazuli"
              isLoading={loading}
              aria-label="Enviar mensaje"
            >
              Enviar
            </Button>
          </Tooltip>
        </Flex>
      </VStack>
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          position="fixed"
          bottom="20px"
          right="20px"
          colorScheme="lapisLazuli"
          size="sm"
          borderRadius="full"
          boxShadow="md"
          zIndex={2}
        >
          ↑ Inicio
        </Button>
      )}
    </Box>
  );
};

export default Chat;