const CommonBackground = ({ children }) => {
    return (
        <section 
        className="w-full min-h-screen bg-[#f0f4f5] flex items-center justify-center px-4 py-10 bg-cover bg-no-repeat bg-center"
        style={{
            backgroundImage: "url('https://assets.nhs.uk/nhsuk-cms/images/test5_4nG3bKJ.width-1000.png')",
        }}
        >
            {children}
        </section>
    )
}

export default CommonBackground;