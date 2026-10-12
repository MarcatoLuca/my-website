import { useLanguage } from '../../i18n/LanguageProvider';

export function Footer() {
    const { strings } = useLanguage();
    return (
        <footer className="max-w-[1200px] mx-auto px-6 py-12 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                <p>{strings.footer.rights}</p>
                <p>{strings.footer.quote}</p>
            </div>
        </footer>
    )
}