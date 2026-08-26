import { IEstimate } from "@/schema/estimateSchema";

function MyEmail(value: IEstimate) {
    const cleanPhone = value.phoneNumber ? value.phoneNumber.replace(/[\s.-]/g, "").replace(/^(\+33|0)/, "") : "";

    return (
        <>
            <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '24px', borderRadius: '8px', fontFamily: 'sans-serif' }}>
                <h1 style={{ color: '#ffffff', fontSize: '22px', marginBottom: '12px' }}>Bonjour !</h1>
                <h2 style={{ fontSize: '18px', fontWeight: 'normal', lineHeight: '1.4' }}>
                    <strong style={{ color: '#2563EB', fontWeight: '900' }}>{value.name}</strong> a fait une demande de devis pour <strong style={{ color: '#2563EB', fontWeight: '800' }}>{value.service}</strong>
                </h2>
                
                <p style={{ margin: '20px 0', fontSize: '16px', lineHeight: '1.5' }}>
                    <strong>Message :</strong> <em>"{value.message}"</em>
                </p>

                <div style={{ margin: '20px 0', fontSize: '15px', backgroundColor: '#111111', padding: '16px', borderRadius: '6px' }}>
                    <strong style={{ display: 'block', marginBottom: '8px' }}>Coordonnées :</strong>
                    <ul style={{ paddingLeft: '20px', margin: '0', lineHeight: '1.6' }}>
                        <li>Nom : {value.name}</li>
                        <li>Téléphone : {value.phoneNumber}</li>
                        <li>Email : {value.email?.toLowerCase()}</li>
                        {value.address && (
                            <li>Adresse : {value.address}</li>
                        )}
                        {(value.postalCode || value.city) && (
                            <li>Localisation : {value.postalCode} {value.city}</li>
                        )}
                    </ul>
                </div>

                {value.whatsapp && cleanPhone && (
                    <div style={{ marginTop: '24px' }}>
                        <a
                            href={`https://wa.me/33${cleanPhone}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '12px 24px',
                                backgroundColor: '#ea580c',
                                color: '#000000',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                borderRadius: '8px',
                            }}
                        >
                            Discuter sur WhatsApp 📱
                        </a>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <img
                    src="https://gvs3d.fr/logo.wepb"
                    width={200}
                    alt="Logo GVS3D"
                    style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </>
    );
}

export default MyEmail;