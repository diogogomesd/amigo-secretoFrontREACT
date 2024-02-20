import { PersonComplete } from '@/types/PersonComplete';
import * as api from '@/api/admin';
import { useEffect, useState } from 'react';
import { ErrorItem, getErrorFromZod } from '@/utils/getErrorsFromZod';
import { z } from 'zod';
import { InputField } from '../InputField';
import { escapeCPF } from '@/utils/escapeCpf';
import { Button } from '../Button';

type Props = {
  person: PersonComplete;
  refreshAction: () => void;
};

export const PersonEdit = async ({ person, refreshAction }: Props) => {
  const [nameField, setNameField] = useState(person.name);
  const [cpfField, setCpfField] = useState(person.cpf);
  const [errors, setErrors] = useState<ErrorItem[]>([]);
  const [loading, setLoading] = useState(false);

  const personSchema = z.object({
    nameField: z.string().min(4, 'Insira o nome no campo.'),
    cpfField: z.string().length(11, 'Insira um cpf válido no campo.'),
  });
  useEffect(() => {
    setErrors([]);
    const data = personSchema.safeParse({ nameField, cpfField });
    if (!data.success) setErrors(getErrorFromZod(data.error));
  }, [nameField, cpfField]);

  const handleSaveButton = async () => {
    if (errors.length > 0) return;
    setLoading(true);
    const updatePerson = await api.updatePerson(
      person.id_event,
      person.id_group,
      person.id,
      { name: nameField, cpf: cpfField }
    );
    setLoading(false);
    if (updatePerson) {
      refreshAction();
    } else {
      alert('Ocorreu um erro ao atualizar os dados da pessoa.');
    }
  };

  return (
    <div>
      <h4 className='text-xl'>Editar Pessoa</h4>
      <InputField
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
        placeholder='Digite o nome da pesssoa.'
        errorMessage={
          errors.find((item) => item.field === 'nameField')?.massage
        }
        disabled={loading}
      />
      <InputField
        value={cpfField}
        onChange={(e) => setCpfField(escapeCPF(e.target.value))}
        placeholder='Digite o cpf da pesssoa.'
        errorMessage={errors.find((item) => item.field === 'cpfField')?.massage}
        disabled={loading}
      />
      <div>
        <Button
          value='Cancelar'
          onClick={refreshAction}
          className='bg-green-500 hover:bg-green-400'
          disabled={loading}
        />
        <Button
          value={loading ? 'Adicionando...' : 'Adicionar'}
          onClick={handleSaveButton}
          className='bg-green-500 hover:bg-green-400'
          disabled={loading}
        />
      </div>
    </div>
  );
};
