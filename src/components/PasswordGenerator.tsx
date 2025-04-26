
import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const { toast } = useToast();

  const generatePassword = () => {
    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset === '') {
      setPassword('');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard",
        duration: 2000,
      });
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">Password Generator</h1>
        
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
          <span className="text-lg font-medium break-all">{password}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={copyToClipboard}
            className="h-10 w-10"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Password Length</label>
              <span className="text-sm text-gray-500">{length}</span>
            </div>
            <Slider
              value={[length]}
              onValueChange={(value) => setLength(value[0])}
              max={30}
              min={4}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="uppercase" 
                checked={includeUppercase}
                onCheckedChange={(checked) => setIncludeUppercase(checked as boolean)}
              />
              <label htmlFor="uppercase" className="text-sm font-medium">
                Include Uppercase Letters
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="lowercase" 
                checked={includeLowercase}
                onCheckedChange={(checked) => setIncludeLowercase(checked as boolean)}
              />
              <label htmlFor="lowercase" className="text-sm font-medium">
                Include Lowercase Letters
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="numbers" 
                checked={includeNumbers}
                onCheckedChange={(checked) => setIncludeNumbers(checked as boolean)}
              />
              <label htmlFor="numbers" className="text-sm font-medium">
                Include Numbers
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="symbols" 
                checked={includeSymbols}
                onCheckedChange={(checked) => setIncludeSymbols(checked as boolean)}
              />
              <label htmlFor="symbols" className="text-sm font-medium">
                Include Symbols
              </label>
            </div>
          </div>

          <Button 
            className="w-full"
            onClick={generatePassword}
          >
            Generate Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
