const navItems =[
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-10 bg-transparent backdrop-blur-md"/>
    );
};