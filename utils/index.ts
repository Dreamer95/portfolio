export const getPathResume = () => {
    const isDev = process.env.NODE_ENV === 'development';

    if(isDev) {
        return '/resume.pdf'
    }

    return '/portfolio/resume.pdf'
}