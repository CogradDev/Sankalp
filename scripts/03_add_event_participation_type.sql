-- Add event_participation_type column to registrations table
ALTER TABLE registrations 
ADD COLUMN IF NOT EXISTS event_participation_type VARCHAR(100);

-- Add comment to column
COMMENT ON COLUMN registrations.event_participation_type IS 'Type of event participation: main_event, pre_event, or both';
