
-- Fix RLS policies: change from RESTRICTIVE to PERMISSIVE
DROP POLICY IF EXISTS "Admins can delete projects" ON public.recent_projects;
DROP POLICY IF EXISTS "Admins can insert projects" ON public.recent_projects;
DROP POLICY IF EXISTS "Admins can update projects" ON public.recent_projects;
DROP POLICY IF EXISTS "Anyone can view published projects" ON public.recent_projects;

CREATE POLICY "Admins can delete projects" ON public.recent_projects
FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert projects" ON public.recent_projects
FOR INSERT TO authenticated WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update projects" ON public.recent_projects
FOR UPDATE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can view published projects" ON public.recent_projects
FOR SELECT USING ((published = true) OR has_role(auth.uid(), 'admin'::app_role));

-- Create storage bucket for project images
INSERT INTO storage.buckets (id, name, public) VALUES ('project-images', 'project-images', true);

-- Storage policies
CREATE POLICY "Anyone can view project images" ON storage.objects
FOR SELECT USING (bucket_id = 'project-images');

CREATE POLICY "Admins can upload project images" ON storage.objects
FOR INSERT TO authenticated WITH CHECK (bucket_id = 'project-images' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete project images" ON storage.objects
FOR DELETE TO authenticated USING (bucket_id = 'project-images' AND has_role(auth.uid(), 'admin'::app_role));
