import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import FerrariFooter from "./FerrariFooter";
import "./Team.css";

const teamMembers = [
	{
		name: "CHARLES LECLERC",
		role: "Official Driver",
		image: "/charles.png",
		link: "https://www.ferrari.com/en-EN/formula1/charles-leclerc",
	},
	{
		name: "LEWIS HAMILTON",
		role: "Official Driver",
		image: "/lewis.png",
		link: "https://www.ferrari.com/en-EN/formula1/lewis-hamilton",
	},
	{
		name: "FRED VASSEUR",
		role: "Team Principal",
		image: "/vasseur.png",
		link: "https://www.ferrari.com/en-EN/formula1/frederic-vasseur",
	},
];

function LogoShrinkOnScroll() {
	const [scale, setScale] = useState(1.08);
	const [top, setTop] = useState("7.7rem");

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
			const newScale = clamp(
				1.08 - (scrollY / 120) * (1.08 - 0.7),
				0.7,
				1.08
			);
			const newTop = clamp(111 - (scrollY / 120) * (111 - 47), 47, 111);
			setScale(newScale);
			setTop(`${newTop}px`);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<a
			href="https://www.ferrari.com/en-EN/formula1"
			target="_blank"
			rel="noopener noreferrer"
			style={{
				position: "fixed",
				top,
				left: "50.5%",
				transform: `translateX(-50%) scale(${scale})`,
				zIndex: 20,
				transition:
					"top 0.18s cubic-bezier(.4,0,.2,1), transform 0.18s cubic-bezier(.4,0,.2,1)",
				width: "120px",
				height: "120px",
				pointerEvents: "auto",
			}}
		>
			<img
				src="https://cdn.ferrari.com/cms/network/media/img/resize/678a438d6743270010529276-scudetto-con-hp-2025?"
				alt="Ferrari Logo"
				style={{
					width: "100%",
					height: "100%",
					objectFit: "contain",
					background: "transparent",
				}}
			/>
		</a>
	);
}

export default function TeamPage() {
	return (
		<div className="team-page">
			<LogoShrinkOnScroll />
			<section
				className="team-grid"
				style={{ marginTop: "4.5rem" }} // Add extra top margin to move cards lower
			>
				{teamMembers.map((member, i) => (
					<TeamCard key={i} {...member} />
				))}
			</section>
			<div
				style={{
					width: "100vw",
					background: "#fff",
					padding: "0.2rem 0 0.2rem 0",
					display: "flex",
					justifyContent: "center",
					margin: 0,
				}}
			>
				<FerrariFooter />
			</div>
		</div>
	);
}
