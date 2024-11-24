'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

export default function Chatbox() {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }])
      setInput("")
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for your message. Our team will get back to you soon!", sender: "bot" }])
      }, 1000)
    }
  }

  return (
    <section id = 'chatbox'className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Try Our Chatbot</h2>
        <Card className="mx-auto max-w-[500px]">
          <CardHeader>
            <CardTitle>ChatBot AI Demo</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`rounded-lg p-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {message.text}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button onClick={handleSend}>Send</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

