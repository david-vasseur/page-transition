import { IEstimate } from "@/schema/estimateSchema";

function ClientEmail(value: IEstimate) {
    return (
        <>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '24px', borderRadius: '8px', fontFamily: 'sans-serif' }}>
                <h1 style={{ color: '#ea580c' }}>Confirmation de votre demande</h1>
                <p style={{ marginBottom: '16px', fontSize: '16px' }}>
                    Bonjour <strong>{value.name}</strong>,
                </p>
                <p style={{ marginBottom: '16px', fontSize: '16px' }}>
                    Nous avons bien reçu votre demande de devis concernant le service : <strong style={{ color: '#2563EB' }}>{value.service}</strong>.
                </p>
                <p style={{ marginBottom: '16px', fontSize: '16px' }}>
                    Notre équipe fait le nécessaire pour analyser vos besoins et vous recontacter dans les plus brefs délais.
                </p>

                <div style={{ marginBottom: '16px', fontSize: '16px', backgroundColor: '#111', padding: '16px', borderRadius: '6px' }}>
                    <strong>Rappel de vos informations :</strong>
                    <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                        <li>Téléphone : {value.phoneNumber}</li>
                        {value.address && <li>Adresse : {value.address}</li>}
                        {value.postalCode && <li>Code postal : {value.postalCode}</li>}
                        <li style={{ marginTop: '8px' }}><strong>Message :</strong> "{value.message}"</li>
                    </ul>
                </div>

                <p style={{ fontSize: '14px', color: '#888', marginTop: '24px' }}>
                    Merci de votre confiance,<br />
                    <strong>L'équipe GVS 3D</strong>
                </p>
            </div>
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                <img
                    src="https://gvs3d.fr/logo.webp"
                    width={600}
                    height={400}
                    alt="Logo GVS 3D"
                    style={{ display: 'block', margin: '0 auto' }}
                />
            </div>
        </>
    );
}

export default ClientEmail;