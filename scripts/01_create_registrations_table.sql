-- Create registrations table for SANKALP 2026
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  designation VARCHAR(255),
  category VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert registrations
CREATE POLICY "Allow public to insert registrations" ON registrations
  FOR INSERT WITH CHECK (true);

-- Create policy to allow only authenticated users to read all registrations (for admin)
CREATE POLICY "Allow authenticated users to read registrations" ON registrations
  FOR SELECT USING (auth.role() = 'authenticated');
