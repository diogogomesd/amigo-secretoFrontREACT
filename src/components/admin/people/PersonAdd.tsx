import { ErrorItem, getErrorFromZod } from '@/utils/getErrorsFromZod';
import { useState } from 'react';
import { z } from 'zod';
import { InputField } from '../InputField';
import { escapeCPF } from '@/utils/escapeCpf';
import { Button } from '../Button';
import * as api from '@/api/admin';

type Props = {
  eventId: number;
  groupId: number;
  refreshAction: () => void;
};

export const PersonAdd = ({ eventId, groupId, refreshAction }: Props) => {
  const [nameField, setNameField] = useState('');
  const [cpfField, setCpfField] = useState('');
  const [errors, setErrors] = useState<ErrorItem[]>([]);
  const [loading, setLoading] = useState(false);

  const personSchema = z.object({
    nameField: z.string().min(4, 'Insira o nome no campo.'),
    cpfField: z.string().length(11, 'Insira um cpf válido no campo.'),
  });

  const handleSaveButton = async () => {
    setErrors([]);
    const data = personSchema.safeParse({ nameField, cpfField });
    if (!data.success) setErrors(getErrorFromZod(data.error));
    setLoading(true);
    const newPerson = await api.AddPerson(eventId, groupId, {
      name: nameField,
      cpf: cpfField,
    });
    setLoading(false);
    if (newPerson) {
      setNameField('');
      setCpfField('');
      refreshAction();
    } else {
      alert('Ocorreu um erro ao adicionar a pessoa.');
    }
  };

  return (
    <div>
      <h4 className='text-xl'>Nova Pessoa</h4>
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
          value={loading ? 'Salvando...' : 'salvar'}
          onClick={handleSaveButton}
          className='bg-green-500 hover:bg-green-400'
          disabled={loading}
        />
      </div>
    </div>
  );
};
