import TransitionLink from './ui/transitionLink';

function NavBar() {
    return (
        <div className="absolute h-10 w-svw bg-linear-to-top from-transparent to-gray-500 z-10">
            <ul className="w-full h-full flex gap-10 justify-center items-center">
                <li>
                    <TransitionLink href={"/"}>Accueil</TransitionLink>
                </li>
                <li>
                    <TransitionLink href={"/bio"}>Biographie</TransitionLink>
                </li>
                <li>
                    <TransitionLink href={"/product"}>Produits</TransitionLink>
                </li>
                <li>
                    <TransitionLink href={"/contact"}>Contact</TransitionLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar