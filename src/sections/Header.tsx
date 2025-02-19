import logo from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

interface HeaderProps {
  onOpenModal: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='py-5'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <Image
              src={logo}
              alt='Saas Logo'
              // height={100}
              width={200}
              // className='border border-solid border-black'
            />
            <MenuIcon className='h-5 w-5 md:hidden' />
            <nav className='hidden md:flex gap-6 text-black/60 items-center'>
              <a href='#about'>About</a>
              <a href='#features'>Features</a>
              <a href='#testimonials'>Customers</a>
              <a href='#updates'>Updates</a>
              <button onClick={onOpenModal} className='btn btn-primary'>
                Contact Us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
