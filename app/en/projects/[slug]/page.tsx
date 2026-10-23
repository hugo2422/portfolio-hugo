import {notFound} from "next/navigation";
import {getProjectBySlug,projects} from "../../../../data/projects";
import ProjectCaseStudy from "../../../../components/ProjectCaseStudy";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProjectBySlug(slug);return {title:p?p.titleEn+" | Hugo Tekeng":"Hugo Tekeng",description:p?p.taglineEn:undefined};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const project=getProjectBySlug(slug);if(!project)notFound();return <ProjectCaseStudy project={project} locale="en"/>;}
