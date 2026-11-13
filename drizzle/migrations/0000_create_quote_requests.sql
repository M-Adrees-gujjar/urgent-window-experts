CREATE TABLE public.quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(trim(name)) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(trim(email)) BETWEEN 3 AND 255),
  phone text CHECK (phone IS NULL OR char_length(phone) <= 40),
  postcode text NOT NULL CHECK (char_length(trim(postcode)) BETWEEN 2 AND 16),
  service text NOT NULL CHECK (service IN ('Windows', 'Doors', 'Glazing', 'Extensions & conservatories', 'Roof glazing', 'Other')),
  message text NOT NULL DEFAULT '' CHECK (char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
REVOKE ALL ON TABLE public.quote_requests FROM anon, authenticated;
GRANT ALL ON TABLE public.quote_requests TO service_role;
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;