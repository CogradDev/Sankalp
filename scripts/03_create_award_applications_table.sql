-- Create award_applications table for storing award application submissions
CREATE TABLE IF NOT EXISTS award_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Section A: Applicant Information
  applicant_name VARCHAR(255) NOT NULL,
  designation VARCHAR(255) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  city VARCHAR(100) NOT NULL,
  applicant_category VARCHAR(50) NOT NULL, -- Student/Faculty/Startup/Corporate/Government/Independent
  
  -- Section B: Project Details
  project_title VARCHAR(500) NOT NULL,
  award_category VARCHAR(100) NOT NULL, -- Innovation Excellence/Emerging Startup/Social Impact/Atmanirbhar/Student Innovation
  theme_alignment TEXT,
  
  -- Section C: Project Description
  problem_statement TEXT NOT NULL,
  solution_description TEXT NOT NULL,
  innovation_uniqueness TEXT NOT NULL,
  impact_description TEXT NOT NULL,
  
  -- Section D: Atmanirbhar Alignment
  atmanirbhar_contribution TEXT NOT NULL,
  vision_2047_relevance TEXT NOT NULL,
  
  -- Section E: Implementation Status
  project_stage VARCHAR(50) NOT NULL, -- Idea Stage/Prototype/Pilot Testing/Commercialized
  trl_level VARCHAR(10), -- TRL 1-9
  scalability_plan TEXT,
  
  -- Section F: Team Details
  team_size INTEGER,
  team_roles TEXT,
  
  -- Section G: Document Uploads (URLs)
  proposal_pdf_url TEXT,
  image_urls TEXT[], -- Array of image URLs
  video_url TEXT,
  
  -- Section H: Declaration
  terms_accepted BOOLEAN DEFAULT false NOT NULL,
  data_consent BOOLEAN DEFAULT false NOT NULL,
  
  -- Additional metadata
  status VARCHAR(50) DEFAULT 'submitted' NOT NULL, -- submitted/under_review/shortlisted/winner/rejected
  admin_notes TEXT
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_award_applications_email ON award_applications(email);

-- Create index on award_category for filtering
CREATE INDEX IF NOT EXISTS idx_award_applications_category ON award_applications(award_category);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_award_applications_created_at ON award_applications(created_at DESC);

-- Enable Row Level Security
ALTER TABLE award_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert applications (public submissions)
CREATE POLICY "Allow public to insert award applications"
  ON award_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Allow authenticated users to read applications (for admin dashboard)
CREATE POLICY "Allow authenticated users to read award applications"
  ON award_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_award_applications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_award_applications_updated_at
  BEFORE UPDATE ON award_applications
  FOR EACH ROW
  EXECUTE FUNCTION update_award_applications_updated_at();

-- Add comment
COMMENT ON TABLE award_applications IS 'Stores award application submissions for SANKALP 2026';
