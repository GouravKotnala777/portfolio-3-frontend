import { NavLink } from "react-router-dom";

const StackLogo = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630" stroke-width="0">
        <rect height="630" width="630" rx="62" className="fill-transparent"></rect>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="">
        <rect height="512" width="512" rx="50" className="fill-transparent"></rect>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 26 26" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"></path>
    </svg>,

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.7 0.4 22 22" className="text-neutral-800 dark:text-neutral-200">
        <circle cx="12" cy="11.245" r="1.785" className="fill-neutral-800 dark:fill-neutral-100"></circle>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z"></path>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z"></path>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z"></path>
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 1 22 22" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.11.091-.221.22-.221h.936c.108 0 .22.092.22.221v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099a1.55 1.55 0 0 1-.771-1.34V7.786c0-.55.293-1.064.771-1.339l7.316-4.237a1.637 1.637 0 0 1 1.544 0l7.317 4.237c.479.274.771.789.771 1.339v8.458c0 .549-.293 1.063-.771 1.34l-7.317 4.236c-.241.11-.516.165-.773.165zm2.256-5.816c-3.21 0-3.87-1.468-3.87-2.714 0-.11.092-.221.22-.221h.954c.11 0 .201.073.201.184.147.971.568 1.449 2.514 1.449 1.54 0 2.202-.35 2.202-1.175 0-.477-.185-.825-2.587-1.063-1.999-.2-3.246-.643-3.246-2.238 0-1.485 1.247-2.366 3.339-2.366 2.347 0 3.503.809 3.649 2.568a.297.297 0 0 1-.056.165c-.037.036-.091.073-.146.073h-.953a.212.212 0 0 1-.202-.164c-.221-1.012-.789-1.34-2.292-1.34-1.689 0-1.891.587-1.891 1.027 0 .531.237.696 2.514.99 2.256.293 3.32.715 3.32 2.294-.02 1.615-1.339 2.531-3.67 2.531z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1 27 27" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 27 27" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-150 -200 1455 1300" className="">
        <path className="fill-neutral-800 dark:fill-neutral-100" d="M577.344 0L1154.69 1000H0L577.344 0Z"></path>
    </svg>

];

function Projects() {
    return(
        <section className=" flex flex-col gap-10 relative min-h-screen font-roboto selection:bg-neutral-300 dark:selection:bg-neutral-600 pt-30">
            <div className="absolute top-0 left-0 inset-0 border border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto"></div>


            <div className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto gap-8">
                    <div className="flex">
                        <div className="w-[40%] content-center border border-neutral-100 dark:border-neutral-800
                            bg-[radial-gradient(circle,var(--color-neutral-100)_1px,transparent_1px)]
                            dark:bg-[radial-gradient(circle,var(--color-neutral-700)_0.5px,transparent_1px)]
                            bg-size-[14px_14px]
                        ">
                            <div className="
                                border border-neutral-100 dark:border-neutral-800
                                [background:radial-gradient(circle_at_0%_100%,var(--color-neutral-600)_30%,white_80%)]
                                dark:[background:radial-gradient(circle_at_100%_0%,var(--color-neutral-300)_20%,var(--color-neutral-900)_50%)]
                            ">
                                <img src="ecommerce.png" alt="ecommerce.png"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="border-x w-[60%] border-neutral-100 dark:border-neutral-800 flex flex-col">
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 font-medium text-3xl px-3">Ecommerce Web App</div>
                            <p className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-200 font-sans tracking-wider leading-relaxed [font-size:var(--text-md)] px-3 py-2 min-h-30">An Ecommerce website with few features like authentication/authorization, cart management, wishlist, user activities management, coupons/gifts management, user reference system, order management, admin chat support, product management, payment gateway and few more.</p>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 flex px-3 py-2 gap-6">
                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-frontend`} className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="p-1 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </div>
                                </NavLink>

                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-backend`} className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="p-1 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </div>
                                </NavLink>

                                <NavLink to={`https://ecommerce-1-frontend.vercel.app`} className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="p-1 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-200 dark:text-neutral-700 font-mono text-sm px-3">Technologies</div>
                            <div className="flex justify-start items-center flex-wrap">
                                {
                                    StackLogo.map((logo) => (
                                        <div className="relative w-7 h-7 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg">
                                            <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[85%] h-[85%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md">
                                                {logo}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 z-1">
                <div className="border-x border-neutral-100 dark:border-neutral-800 max-w-3xl mx-auto gap-8">
                    <div className="flex">
                        <div className="w-[40%] content-center border border-neutral-100 dark:border-neutral-800
                            bg-[radial-gradient(circle,var(--color-neutral-100)_1px,transparent_1px)]
                            dark:bg-[radial-gradient(circle,var(--color-neutral-700)_0.5px,transparent_1px)]
                            bg-size-[14px_14px]
                        ">
                            <div className="
                                border border-neutral-100 dark:border-neutral-800
                                [background:radial-gradient(circle_at_0%_100%,var(--color-neutral-600)_30%,white_80%)]
                                dark:[background:radial-gradient(circle_at_100%_0%,var(--color-neutral-300)_20%,var(--color-neutral-900)_50%)]
                            ">
                                <img src="acremate.png" alt="acremate.png"
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div className="border-x w-[60%] border-neutral-100 dark:border-neutral-800 flex flex-col">
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-950 dark:text-neutral-50 font-medium text-3xl px-3">Real-Estate Management</div>
                            <p className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-600 dark:text-neutral-200 font-sans tracking-wider leading-relaxed [font-size:var(--text-md)] px-3 py-2 min-h-30">Manage your real estate sales and payments smoothly.</p>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 flex px-3 py-2 gap-6">
                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-frontend`} className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="p-1 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </div>
                                </NavLink>

                                <NavLink to={`https://github.com/GouravKotnala777/Ecommerce-1-backend`} className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="p-1 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                        </svg>
                                    </div>
                                </NavLink>

                                <NavLink to={`https://ecommerce-1-frontend.vercel.app`} className="relative w-10 h-10 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)_inset] transition-all ease-in-out duration-300">
                                    <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[90%] h-[90%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md hover:[box-shadow:0px_0px_1px_0.1px_var(--color-sky-300)] transition-all ease-in-out duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="p-1 hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-300">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="border-y border-neutral-100 dark:border-neutral-800 text-neutral-200 dark:text-neutral-700 font-mono text-sm px-3">Technologies</div>
                            <div className="flex justify-start items-center flex-wrap">
                                {
                                    StackLogo.map((logo) => (
                                        <div className="relative w-7 h-7 m-3 [box-shadow:0px_0px_1px_0px_var(--color-neutral-200)_inset] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-700)_inset] rounded-lg">
                                            <div className="absolute top-[50%] left-[50%] p-0.5 -translate-x-[50%] -translate-y-[50%] w-[85%] h-[85%] [box-shadow:0px_0px_1px_0px_var(--color-neutral-400)] dark:[box-shadow:0px_0px_1px_0px_var(--color-neutral-500)] rounded-md">
                                                {logo}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        



        </section>
    )
};

export default Projects;