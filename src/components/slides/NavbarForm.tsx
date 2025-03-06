import Image from "next/image"

// haz un navbar con logo.svg a la esquina superior izquierda

export default function NavbarForm() {
    return (
        <div className="flex items-center justify-center mt-10">
            <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        </div>
    )
} 