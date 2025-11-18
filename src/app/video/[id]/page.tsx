"use client";

import { use } from "react";

import { VideoPlayerPage } from "@/components/VideoPlayerPage";

interface VideoPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function Page({ params }: VideoPageProps) {
  const { id } = use(params);

  return <VideoPlayerPage videoId={id} />;
}