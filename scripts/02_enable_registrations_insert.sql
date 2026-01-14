-- Disable RLS or create proper RLS policy for registrations table
-- Option 1: Disable RLS (easier for public registrations)
ALTER TABLE registrations DISABLE ROW LEVEL SECURITY;

-- Option 2: If you want to keep RLS, create a policy that allows anyone to insert
-- Uncomment the lines below if you want to use this instead
-- CREATE POLICY "Allow anyone to insert registrations"
-- ON registrations
-- FOR INSERT
-- WITH CHECK (true);

-- CREATE POLICY "Allow authenticated users to read"
-- ON registrations
-- FOR SELECT
-- TO authenticated
-- USING (true);
