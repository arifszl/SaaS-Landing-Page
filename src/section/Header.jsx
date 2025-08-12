import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
const NavLink = ({ title }) => (
	<LinkScroll
		className="base-bold text-p4 uppercase transition-colors duration-500 cursor-auto hover:text-amber-400"
		smooth={true}
		max-lg:my-4
		max-lg:h5
	>
		{title}
	</LinkScroll>
);

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className="fixed top-0 left-0 w-full z-50 w-full py-10">
			<div className="container flex h-15 items-center max-lg:px-6">
				<a className="lg:hidden flex-1 cursor-pointer z-2" href="">
					<img
						src="/images/backimg.png"
						alt="Logo"
						width={125}
						height={60}
					/>
				</a>
				<div
					className={clsx(
						"w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
						isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none "
					)}
				>
					<div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sideba-before max-md:px-4 ">
						<nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
							<ul className="flex max-lg:block max-lg:px-12">
								<li className="nav-li">
									<NavLink title="FEATURES" />
									<div className="dot" />
									<NavLink title="PRICING" />
								</li>
								<li className="nav-logo">
									<LinkScroll
										to="hero"
										offset={-100}
										spy
										smooth
										className={clsx(
											"max-lg:hidden transition-transform duration-500"
										)}
									>
										<img
											src="/images/backimg.png"
											alt="Logo"
											width={90}
											height={35}
										/>
									</LinkScroll>
								</li>
								<li className="nav-li ">
									<NavLink title="FAQ" />
									<div className="dot" />
									<NavLink title="Downlaod" />
								</li>
							</ul>
						</nav>
						<div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
							<img
								src="/images/bg-outlines.svg"
								alt=""
								className="relative z-2"
							/>
							<img
								src="/images/bg-outlines-fill.png"
								alt=""
								className="absolute inset-0 mix-blend-soft-light opacity-5"
							/>
						</div>
					</div>
				</div>
				<button
					className="lg:hidden size-10 border-2 border-s4/25 rounded-full flex justify-center items-center  z-2  "
					onClick={() => setIsOpen((prevState) => !prevState)}
				>
					<img
						src={`/images/${isOpen ? "close" : "magic"}.svg`}
						alt="Menu"
						className="size-1/2 object-contain"
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
