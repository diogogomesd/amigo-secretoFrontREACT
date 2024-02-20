import { Group } from '@/types/Group';
import { ErrorItem, getErrorFromZod } from '@/utils/getErrorsFromZod';
import { useEffect, useState } from 'react';
import { InputField } from '../InputField';
import { Button } from '../Button';
import { z } from 'zod';
import * as api from '@/api/admin';

type Props = {
  group: Group;
  refreshAction: () => void;
};

export const GroupEdit = ({ group, refreshAction }: Props) => {
  const [nameField, setNameField] = useState(group.name);
  const [errors, setErrors] = useState<ErrorItem[]>([]);
  const [loading, setLoading] = useState(false);

  const groupSchema = z.object({
    nameField: z.string().min(1, 'Preencha o campo nome do grupo.'),
  });
  useEffect(() => {
    setErrors([]);
    const data = groupSchema.safeParse({ nameField });
    if (!data.success) setErrors(getErrorFromZod(data.error));
  }, [nameField]);

  const handleSaveButton = async () => {
    if (errors.length > 0) return;
    setLoading(true);
    const updateGroup = await api.UpdateGroup(group.id_event, group.id, {
      name: nameField,
    });
    setLoading(false);
    if (updateGroup) {
      refreshAction();
    } else {
      alert('Ocorreu um erro ao atualizar o grupo.');
    }
  };

  return (
    <div>
      <h4 className='text-xl'>Editar grupo</h4>
      <InputField
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
        placeholder='Digite o nome do Grupo.'
        errorMessage={
          errors.find((item) => item.field === 'nameField')?.massage
        }
        disabled={loading}
      />

      <div className='flex gap-3'>
        <Button
          value='Cancelar'
          onClick={() => refreshAction()}
          className='bg-red-500'
          disabled={loading}
        />
        <Button
          value={loading ? 'Salvando....' : 'Salvar'}
          onClick={handleSaveButton}
          className='bg-green-500'
          disabled={loading}
        />
      </div>
    </div>
  );
};
