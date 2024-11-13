"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from 'lucide-react'
import { useOpenGetStarted } from '@/hooks/open-get-started'

export default function Contactpage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    spend: '',
    location: '',
    interest: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const {onClose} = useOpenGetStarted()

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6 max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">      
      <div className="  grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder='Name' value={formData.name} onChange={handleInputChange} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" placeholder='email@email.com' type="email" value={formData.email} onChange={handleInputChange} required />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder='+00 1234567890' value={formData.phone} onChange={handleInputChange} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" value={formData.company} placeholder='company name' onChange={handleInputChange} required />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="spend">What&apos;s your current programmatic spend?</Label>
          <Select name="spend" onValueChange={(value) => handleSelectChange('spend', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select spend range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50k">$0 - $50,000</SelectItem>
              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
              <SelectItem value="500k+">$500,000+</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Where are you based?</Label>
          <Select name="location" onValueChange={(value) => handleSelectChange('location', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="north-america">North America</SelectItem>
              <SelectItem value="europe">Europe</SelectItem>
              <SelectItem value="asia">Asia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="interest">What are you interested in?</Label>
        <Select name="interest" onValueChange={(value) => handleSelectChange('interest', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="advertising">Advertising</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="analytics">Analytics</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
        Book Your Demo
      </Button>
    </form>
  )
}