"use client";

import React from "react";
import "@dotlottie/react-player/dist/index.css";

import { DotLottiePlayer } from "@dotlottie/react-player";

const LottieAnimation = () => {
  return <DotLottiePlayer src="contact-animation.lottie" autoplay loop />;
};

export default LottieAnimation;
