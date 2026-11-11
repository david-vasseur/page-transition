import { IEstimate } from "@/schema/estimateSchema";

const serviceLabels: Record<IEstimate["service"], string> = {
    deratisation: "Dératisation (Lutte contre les rongeurs)",
    desinsectisation: "Désinsectisation (Lutte contre les nuisibles)",
    desinfection: "Désinfection (Nettoyage en profondeur)",
    autre: "Autre demande",
};

function ClientEmail(value: IEstimate) {
    const serviceName = serviceLabels[value.service] || value.service;

    return (
        <>
            <div style={{ backgroundColor: '#000000', color: '#ffffff', padding: '24px', borderRadius: '8px', fontFamily: 'sans-serif' }}>
                <h1 style={{ color: '#ea580c', fontSize: '22px', marginBottom: '16px' }}>
                    Confirmation de votre demande
                </h1>
                <p style={{ marginBottom: '16px', fontSize: '16px', lineHeight: '1.5' }}>
                    Bonjour,
                </p>
                <p style={{ marginBottom: '16px', fontSize: '16px', lineHeight: '1.5' }}>
                    Nous avons bien reçu votre demande de devis concernant le service : <strong style={{ color: '#2563EB' }}>{serviceName}</strong>.
                </p>
                <p style={{ marginBottom: '16px', fontSize: '16px', lineHeight: '1.5' }}>
                    Notre équipe fait le nécessaire pour analyser vos besoins et vous recontacter dans les plus brefs délais au <strong>{value.phoneNumber}</strong>.
                </p>

                <p style={{ fontSize: '14px', color: '#888888', marginTop: '24px', lineHeight: '1.4' }}>
                    Merci de votre confiance,<br />
                    <strong>L'équipe GVS 3D</strong>
                </p>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <img
                    src="https://gvs3d.fr/logo.webp"
                    width={200}
                    alt="Logo GVS 3D"
                    style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}
                />
            </div>
        </>
    );
}

export default ClientEmail;
