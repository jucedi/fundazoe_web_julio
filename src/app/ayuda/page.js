'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AyudaPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/ayuda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Error al enviar');
      router.push('/ayuda/confirmacion');
    } catch (error) {
      alert('Hubo un error al enviar. Por favor intenta de nuevo.');
      setIsSubmitting(false);
    }
  };

  const styles = {
    container: { maxWidth: '600px', margin: '60px auto', padding: '40px', background: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' },
    title: { textAlign: 'center', marginBottom: '20px', color: '#00897B' },
    inputGroup: { marginBottom: '15px' },
    label: { display: 'block', marginBottom: '5px', fontWeight: 'bold' },
    input: { width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '4px' },
    btn: { width: '100%', padding: '15px', background: '#F57C00', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Estamos aquí para escucharte</h1>
      <p style={{textAlign:'center', marginBottom:'30px'}}>Llena este formulario y nos pondremos en contacto contigo lo antes posible.</p>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Nombre Completo</label>
          <input {...register("nombre", { required: "Este campo es obligatorio" })} style={styles.input} />
          {errors.nombre && <span style={{color:'red', fontSize:'12px'}}>{errors.nombre.message}</span>}
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Correo Electrónico</label>
          <input type="email" {...register("email", { required: "Este campo es obligatorio" })} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Teléfono (Opcional)</label>
          <input type="tel" {...register("telefono")} style={styles.input} />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>¿Cómo podemos ayudarte?</label>
          <textarea {...register("mensaje", { required: "Cuéntanos brevemente tu situación" })} style={{...styles.input, minHeight:'120px'}} />
          {errors.mensaje && <span style={{color:'red', fontSize:'12px'}}>{errors.mensaje.message}</span>}
        </div>

        <button type="submit" disabled={isSubmitting} style={isSubmitting ? {...styles.btn, background:'#ccc'} : styles.btn}>
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
      </form>
    </div>
  );
}