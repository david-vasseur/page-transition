import IEstimate from "@/type/estimate"



function MyEmail(value: IEstimate) {
  return (
    <div style={{ backgroundColor: 'black', color: 'orange', padding: '24px', borderRadius: '8px' }}>
      <h1>Bonjour !</h1>
      <h2>{value.name} a fait une demande de devis</h2>
      <p>{value.message}</p>

      {value.whatsapp && value.phoneNumber && (
        <a
          href={`https://wa.me/33${value.phoneNumber.replace(/^0/, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: 'orange',
            color: 'black',
            fontWeight: 'bold',
            borderRadius: '8px',
          }}
        >
          Cliquez ici pour discuter sur WhatsApp
        </a>
      )}
    </div>
  );
}

export default MyEmail