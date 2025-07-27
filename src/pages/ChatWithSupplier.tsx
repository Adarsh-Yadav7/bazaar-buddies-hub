import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, ArrowLeft } from 'lucide-react';

const ChatWithSupplier = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { id: 1, sender: 'supplier', text: 'Hello! How can I help you today?' },
    { id: 2, sender: 'you', text: 'I want to inquire about bulk tomato pricing.' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, sender: 'you', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="shadow-lg max-w-2xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center text-xl font-semibold">
            <MessageCircle className="mr-2 h-5 w-5 text-primary" />
            Chat with Suppliers
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/vendor-dashboard')}
            className="text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Button>
        </CardHeader>

        <CardContent className="flex flex-col space-y-4">
          {/* Chat history */}
          <div className="h-80 overflow-y-auto p-4 border rounded-md bg-muted/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 flex ${
                  msg.sender === 'you' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-sm ${
                    msg.sender === 'you'
                      ? 'bg-primary text-white'
                      : 'bg-white text-black border'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Message input */}
          <div className="flex gap-2">
            <Input
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatWithSupplier;
